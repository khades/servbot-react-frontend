import { call, put, takeEvery } from "redux-saga/effects";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IDonationSourcesGetAction } from "./actions";
import * as API from "./api";
import { IDonationSources } from "./types";

export function* get(action: IDonationSourcesGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: IDonationSources = yield call(
            API.get,
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

export default function* saga() {
    yield takeEvery(actiontypes.GET, get);
}
