import { call, put, select, takeEvery } from "redux-saga/effects";
import API from "../api/api";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import { actiontypes, IChannelNameGetAction } from "./actions";

export function* getChannelName(action: IChannelNameGetAction) {
    const state: IStore = yield select();

    if (state.channelName[action.payload.channelNameID]) {
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
    yield takeEvery(actiontypes.GET, getChannelName);
}
