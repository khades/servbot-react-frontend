import { call, put, takeEvery } from "redux-saga/effects";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import * as Routes from "../routes/routes";
import { ISubDay } from "../subday/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ISubDaysCreateAction, ISubDaysGetAction } from "./actions";
import * as API from "./api";

export function* getSubDays(action: ISubDaysGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: ISubDay[] = yield call(
            API.getSubDays,
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

export function* createSubDay(action: ISubDaysCreateAction) {
    try {
        yield call(API.createSubDay, action.payload.channelID, action.payload.name, action.payload.subsOnly);
        action.payload.history.push(Routes.ToLastSubDay(action.payload.channelID));
        yield put(notificationActions.add(l10n.CREATE_SUCCESSFULL));
    } catch (error) {
        yield put(actions.onSaveError);
        yield put(notificationActions.add(l10n.SUBDAY_ALREADY_ACTIVE));
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getSubDays);
    yield takeEvery(actiontypes.CREATE, createSubDay);
}
