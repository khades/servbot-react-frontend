import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api/api";
import * as actions from "./actioncreators";
import { actiontypes, IChannelNameGetAction } from "./actions";
import { IChannelNameStore } from "./reducer";

export function* getChannelName(action: IChannelNameGetAction) {
    const state: IChannelNameStore = yield select();
    if (state[action.payload.channelNameID]) {
        return;
    }
    yield put(actions.loading(action.payload.channelNameID));
    try {
        const channelName: string = yield call(API.getChannelName, action.payload.channelNameID);
        yield put(actions.ready(action.payload.channelNameID, channelName));
    } catch (err) {
        yield put(actions.notFound(action.payload.channelNameID));
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getChannelName);
}
