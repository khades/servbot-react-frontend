import { call, put, takeLatest } from "redux-saga/effects";
import { IUserLogsInfo } from "../userLogs/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IChannelUsersGetAction } from "./actions";
import * as API from "./api";

export function* getChannelUsers(action: IChannelUsersGetAction) {

    yield put(actions.loading(action.payload.channelID, action.payload.userName));

    try {
        const usersLogs: IUserLogsInfo[] =
            yield call(API.getChannelUsers, action.payload.channelID, action.payload.userName);
        yield put(actions.ready(usersLogs));
    } catch (err) {
        switch (err.state) {
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID));
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized());
            default:
                return yield put(actions.offline());
        }
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getChannelUsers);
}
