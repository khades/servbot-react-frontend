import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import actiontypes from "./actiontypes";

export function* getChannelName(action: any) {
    const state = yield select();

    if (state[action.payload.channelNameID] && state[action.payload.channelNameID].state === States.READY) {
        return;
    }

    yield put({
        payload: {
            channelNameID: action.payload.channelNameID,
        },
        type: actiontypes.LOADING,
    });

    try {
        const channelName: string = yield call(API.getChannelName, action.payload.channelNameID);
        yield put({
            payload: {
                channelName,
                channelNameID: action.payload.channelNameID,
            },
            type: actiontypes.READY,
        });
    } catch (err) {
        yield put({
            payload: {
                channelNameID: action.payload.channelNameID,
            },
            type: actiontypes.NOTFOUND,
        });
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getChannelName);
}
