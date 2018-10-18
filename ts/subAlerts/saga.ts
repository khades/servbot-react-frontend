import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { ISubAlertsWithHistory } from "../api/types";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ISubAlertsGetAction, ISubAlertsSaveAction } from "./actions";

export function* getSubAlerts(action: ISubAlertsGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: ISubAlertsWithHistory = yield call(
            API.getSubAlerts,
            action.payload.channelID);
        yield put(actions.ready(action.payload.channelID, content));
    } catch (err) {
        switch (err.state) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID));
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID));
            default:
                return yield put(actions.offline);
        }
    }
}

export function* saveSubAlerts(action: ISubAlertsSaveAction) {

    // try {
    yield call(API.saveSubAlerts,
        action.payload.channelID,
        action.payload.content);
    yield call(getSubAlerts, actions.get(action.payload.channelID, false));
    yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    //  } catch (err) {
    //      yield put(notificationActions.add(l10n.TEMPLATE_BODY_ERROR));
    //      yield put(actions.afterSaveError(action.payload.channelID));
    //  }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getSubAlerts);
    yield takeEvery(actiontypes.SAVE, saveSubAlerts);
}
