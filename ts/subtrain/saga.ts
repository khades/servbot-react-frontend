import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { ISubTrain } from "../api/types";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ISubTrainGetAction, ISubTrainSaveAction } from "./actions";

export function* getSubTrain(action: ISubTrainGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: ISubTrain = yield call(
            API.getSubTrain,
            action.payload.channelID);
        yield put(actions.ready(action.payload.channelID, content));
    } catch (err) {
        switch (err.state) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID));
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID));
            default:
                return yield put(actions.offline(action.payload.channelID));
        }
    }
}

export function* saveSubTrain(action: ISubTrainSaveAction) {
    try {
        yield call(API.saveSubTrain, action.payload.channelID, action.payload.content);
        yield call(getSubTrain, actions.get(action.payload.channelID, false));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(actions.onSaveError(action.payload.channelID));
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getSubTrain);
    yield takeEvery(actiontypes.SAVE, saveSubTrain);
}
