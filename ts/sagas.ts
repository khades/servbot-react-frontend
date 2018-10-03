import { all, fork } from "redux-saga/effects";
import bans from "./bans/saga";
import channelName from "./channelName/saga";
import channelUsers from "./channelUsers/saga";
import templates from "./templates/saga";
import userInfo from "./userinfo/saga";
import userLogs from "./userLogs/saga";

export function* rootSaga() {
    yield all([
        fork(bans),
        fork(channelName),
        fork(channelUsers),
        fork(templates),
        fork(userInfo),
        fork(userLogs),
    ]);
}
