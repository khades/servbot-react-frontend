import { call, put, takeEvery } from "redux-saga/effects";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IExternalServicesGetAction, IExternalServicesSaveAction } from "./actions";
import * as API from "./api";
import { IChannelExternalServices } from "./types";

export function* getExternalServices(action: IExternalServicesGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: IChannelExternalServices = yield call(
            API.getChannelExternalServices,
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

export function* saveExternalServices(action: IExternalServicesSaveAction) {
    try {
        yield call(API.saveVKGroupInfo, action.payload.channelID, action.payload.content);
        yield call(getExternalServices, actions.get(action.payload.channelID, false));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(actions.onSaveError(action.payload.channelID));
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getExternalServices);
    yield takeEvery(actiontypes.SAVE, saveExternalServices);
}
