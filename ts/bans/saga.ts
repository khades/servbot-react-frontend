import { call, put, takeEvery } from "redux-saga/effects";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IBansGetAction } from "./actions";
import * as API from "./api";
import { IBan } from "./types";

export function* getBans(action: IBansGetAction) {

    yield put(actions.loading(action.payload.channelID));
    try {
        const content: IBan[] = yield call(API.getBans, action.payload.channelID);
        yield put(actions.ready(action.payload.channelID, content));
    } catch (err) {
        switch (err.state) {
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID));
            case States.NOTFOUND:
                return yield put(actions.notFound(action.payload.channelID));
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID));
            default:
                return yield put(actions.offline(action.payload.channelID));
        }
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getBans);
}
