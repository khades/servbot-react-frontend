import { all } from "redux-saga/effects";
import channelName from "./channelName/saga";
import userInfo from "./userinfo/saga";

export default function* rootSaga() {
    yield all([
        channelName,
        userInfo,
    ]);
}
