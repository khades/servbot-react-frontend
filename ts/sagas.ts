import { all } from "redux-saga/effects";
import channelNameSaga from "./channelName/saga";
export default function* rootSaga() {
    yield all([
        channelNameSaga,
    ]);
}
