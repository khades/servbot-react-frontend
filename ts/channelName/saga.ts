import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api";

export function* getChannelName(action: any) {
    const state = yield select();

    if (state[action.payload.channelNameID]) {
        return;
    }

    yield put({
        payload: {
            channelNameID: action.payload.channelNameID,
        },
        type: "CHANNELNAME/LOADING",

    });
    try {
        const channelName = yield call(API.getChannelName, action.payload.channelNameID);
        //console.log(API.getChannelName(action.payload.channelNameID));
        yield put({
            payload: {
                channelName,
                channelNameID: action.payload.channelNameID,
            },
            type: "CHANNELNAME/READY",
        });
    } catch (err) {
        //console.log(err);
    }
}

export default function* saga() {
    yield takeLatest("CHANNELNAME/GET", getChannelName);
}
