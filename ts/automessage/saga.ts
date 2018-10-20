import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { IAutoMessageWithHistory } from "../api/types";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IAutoMessageGetAction, IAutoMessageSaveAction } from "./actions";

export function* getAutoMessage(action: IAutoMessageGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID, action.payload.id));
    }
    try {
        const content: IAutoMessageWithHistory = yield call(
            API.getAutoMessage,
            action.payload.channelID,
            action.payload.id);
        yield put(actions.ready(action.payload.channelID, action.payload.id, content));
    } catch (err) {
        switch (err.state) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID, action.payload.id));
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID, action.payload.id));
            default:
                return yield put(actions.offline);
        }
    }
}

export function* saveAutoMessage(action: IAutoMessageSaveAction) {
    try {
        yield call(API.saveAutoMessage, action.payload.channelID, action.payload.id, action.payload.content);
        yield call(getAutoMessage, actions.get(action.payload.channelID, action.payload.id));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(actions.onSaveError(action.payload.channelID, action.payload.id));
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getAutoMessage);
    yield takeEvery(actiontypes.SAVE, saveAutoMessage);
}
