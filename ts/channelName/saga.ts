import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api";
import States from "../utils/states";

export function* getChannelName(action: any) {
    const state = yield select();

    if (state[action.payload.channelNameID] && state[action.payload.channelNameID].state === States.READY) {
        return;
    }

    yield put({
        payload: {
            channelNameID: action.payload.channelNameID,
        },
        type: "CHANNELNAME/LOADING",
    });

    try {
        const channelName: string = yield call(API.getChannelName, action.payload.channelNameID);
        yield put({
            payload: {
                channelName,
                channelNameID: action.payload.channelNameID,
            },
            type: "CHANNELNAME/READY",
        });
    } catch (err) {
        yield put({
            payload: {
                channelNameID: action.payload.channelNameID,
            },
            type: "CHANNELNAME/NOTFOUND",
        });
    }
}

export default function* saga() {
    yield takeLatest("CHANNELNAME/GET", getChannelName);
}
