import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, ISongRequestsGetAction, ISongRequestsSaveAction, ISongRequestsSaveVolumeAction } from "./actions";
import * as API from "./api";
import { ISongRequests } from "./types";

export function* getSongRequests(action: ISongRequestsGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    }
    try {
        const content: ISongRequests = yield call(
            API.getSongRequests,
            action.payload.channelID);
        yield put(actions.ready(action.payload.channelID, content));
    } catch (err) {
        switch (err.state) {
            case States.NOTAUTHORIZED:
                return yield put(actions.notAuthorized(action.payload.channelID));
            case States.FORBIDDEN:
                return yield put(actions.forbidden(action.payload.channelID));
            default:
                return yield put(actions.offline(action.payload.channelID));
        }
    }
}

export function* saveSongRequests(action: ISongRequestsSaveAction) {
    try {
        yield call(API.saveSongRequestsSettings, action.payload.channelID, action.payload.content);
        yield call(getSongRequests, actions.get(action.payload.channelID));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(actions.onSaveError(action.payload.channelID));
    }
}

export function* saveVolume(action: ISongRequestsSaveVolumeAction) {
    yield call(API.setSongRequestsVolume, action.payload.channelID, action.payload.volume);
}
export default function* saga() {
    yield takeEvery(actiontypes.GET, getSongRequests);
    yield takeEvery(actiontypes.SAVE, saveSongRequests);
    yield takeLatest(actiontypes.SAVEVOLUME, saveVolume);
}
