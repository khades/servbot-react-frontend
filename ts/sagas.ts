import { all, fork } from "redux-saga/effects";
import channelName from "./channelName/saga";
import channelUsers from "./channelUsers/saga";
import userInfo from "./userinfo/saga";
import userLogs from "./userLogs/saga";

export function* rootSaga() {
    yield all([
        fork(channelName),
        fork(channelUsers),
        fork(userInfo),
        fork(userLogs),
    ]);
}
