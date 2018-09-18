import * as actions from "./actioncreators";
import { call, put, select, takeLatest } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import { IChannelNameStore } from "./reducer";
import { actiontypes, ChannelNameActions } from "./actions";

export function* getChannelName(action: ChannelNameActions) {
    const state: IChannelNameStore = yield select();
    if (state[action.payload.channelNameID] && state[action.payload.channelNameID].state === States.READY) {
        return;
    }
    yield put(actions.loadingChannelName(action.payload.channelNameID));
    try {
        const channelName: string = yield call(API.getChannelName, action.payload.channelNameID);
        yield put(actions.readyChannelName(action.payload.channelNameID, channelName));
    } catch (err) {
        yield put(actions.notFoundChannelName(action.payload.channelNameID));
    }
}

export default function* saga() {
    yield takeLatest(actiontypes.GET, getChannelName);
}
