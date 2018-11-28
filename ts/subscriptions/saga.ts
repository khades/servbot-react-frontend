import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { ISubscription } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ISubscriptionsGetAction, ISubscriptionsSetLimitAction } from "./actions";

export function* getSubscriptions(action: ISubscriptionsGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: ISubscription[] = yield call(
            API.getSubscriptions,
            action.payload.channelID,
            action.payload.limit);
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

export function* setLimit(action: ISubscriptionsSetLimitAction) {
    yield call(getSubscriptions, actions.get(action.payload.channelID, false, action.payload.limit));
    yield put(actions.saveLimit(action.payload.channelID, action.payload.limit));

}
export default function* saga() {
    yield takeEvery(actiontypes.GET, getSubscriptions);
    yield takeEvery(actiontypes.SETLIMIT, setLimit);
}
