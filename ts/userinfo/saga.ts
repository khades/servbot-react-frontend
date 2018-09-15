import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import actiontypes from "./actiontypes";

export function* getUserInfo() {
    const state = yield select();

    if (state.state === States.READY) {
        return;
    }

    yield put({
        type: actiontypes.LOADING,
    });

    try {
        const channelName: string = yield call(API.getUserInfo);
        yield put({
            payload: channelName,
            type: actiontypes.READY,
        });
    } catch (err) {
        yield put({
            type: actiontypes.NOTAUTHORIZED,
        });
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getUserInfo);
}
