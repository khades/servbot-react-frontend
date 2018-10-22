import { all, fork } from "redux-saga/effects";
import autoMessage from "./automessage/saga";
import autoMessages from "./automessages/saga";
import bans from "./bans/saga";
import channelName from "./channelName/saga";
import channelUsers from "./channelUsers/saga";
import subAlerts from "./subAlerts/saga";
import subDays from "./subdays/saga";
import template from "./template/saga";
import templates from "./templates/saga";
import userInfo from "./userinfo/saga";
import userLogs from "./userLogs/saga";

export function* rootSaga() {
    yield all([
        fork(autoMessage),
        fork(autoMessages),
        fork(bans),
        fork(channelName),
        fork(channelUsers),
        fork(subAlerts),
        fork(subDays),
        fork(template),
        fork(templates),
        fork(userInfo),
        fork(userLogs),
    ]);
}
