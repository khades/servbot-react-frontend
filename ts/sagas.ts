import { all, fork } from "redux-saga/effects";
import autoMessage from "./automessage/saga";
import autoMessages from "./automessages/saga";
import bans from "./bans/saga";
import channelName from "./channelName/saga";
import channelUsers from "./channelUsers/saga";
import externalServices from "./externalservices/saga";
import songrequests from "./songrequests/saga";
import subAlerts from "./subAlerts/saga";
import subDay from "./subday/saga";
import subDays from "./subdays/saga";
import subscriptions from "./subscriptions/saga";
import subTrain from "./subtrain/saga";
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
        fork(externalServices),
        fork(songrequests),
        fork(subAlerts),
        fork(subDay),
        fork(subDays),
        fork(subscriptions),
        fork(subTrain),
        fork(template),
        fork(templates),
        fork(userInfo),
        fork(userLogs),
    ]);
}
