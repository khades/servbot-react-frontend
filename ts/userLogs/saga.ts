import { call, put, select, takeEvery } from "redux-saga/effects";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IUserLogsGetAction } from "./actions";
import * as API from "./api";
import { IUserLogsInfo } from "./types";

export function* getUserLogs(action: IUserLogsGetAction) {

    yield put(actions.loading(action.payload.channelID, action.payload.userID));
    try {
        const content: IUserLogsInfo = yield call(API.getUserLogs, action.payload.channelID, action.payload.userID);
        yield put(actions.ready(action.payload.channelID, action.payload.userID, content));
    } catch (err) {
        switch (err.state) {
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID, action.payload.userID));
            case States.NOTFOUND:
                return yield put(actions.notFound(action.payload.channelID, action.payload.userID));
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID, action.payload.userID));
            default:
                return yield put(actions.offline());
        }
    }
}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getUserLogs);
}
