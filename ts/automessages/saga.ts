import { call, put, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { IAutoMessageWithHistory } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IAutoMessagesGetAction } from "./actions";

export function* getTemplate(action: IAutoMessagesGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: IAutoMessageWithHistory[] = yield call(
            API.getAutoMessages,
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
    yield takeEvery(actiontypes.GET, getTemplate);
}
