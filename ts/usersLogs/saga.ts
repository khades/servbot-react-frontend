import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api/api";
import { IUserLogsInfo } from "../api/types";
import * as actions from "./actioncreators";
import { actiontypes, IUsersLogsGetAction } from "./actions";

export function* getUsersLogs(action: IUsersLogsGetAction) {

    yield put(actions.loading(action.payload.channelID, action.payload.userName));

    try {
        const usersLogs: IUserLogsInfo[] =
            yield call(API.getUsersLogs, action.payload.channelID, action.payload.userName);
        yield put(actions.ready(usersLogs));
    } catch (err) {
        yield put(actions.notAuthorized());
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getUsersLogs);
}
