import { call, put, select, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { IBan } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IBansGetAction } from "./actions";

export function* getBans(action: IBansGetAction) {

    yield put(actions.loading(action.payload.channelID));
    try {
        const content: IBan[] = yield call(API.getBans, action.payload.channelID);
        yield put(actions.ready(action.payload.channelID, content));
    } catch (err) {
        switch (err) {
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID));
            case States.NOTFOUND:
                return yield put(actions.notFound(action.payload.channelID));
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID));
            default:
                return yield put(actions.notFound(action.payload.channelID));
        }
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getBans);
}
