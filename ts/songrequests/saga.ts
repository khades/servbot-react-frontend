import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import States from "../utils/states";
import * as actions from "./actioncreators";
import * as actionstypes from "./actions";
import * as API from "./api";
import { ISongRequests } from "./types";

export function* getSongRequests(action: actionstypes.ISongRequestsGetAction) {
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

export function* saveSongRequestsSettings(action: actionstypes.ISongRequestsSaveAction) {
    try {
        yield call(API.saveSongRequestsSettings, action.payload.channelID, action.payload.content);
        yield call(getSongRequests, actions.get(action.payload.channelID));
        yield put(notificationActions.add(l10n.SAVE_SUCCESSFULL));
    } catch (err) {
        yield put(actions.onSaveError(action.payload.channelID));
    }
}

export function* saveVolume(action: actionstypes.ISongRequestsSaveVolumeAction) {
    yield call(API.setSongRequestsVolume, action.payload.channelID, action.payload.volume);
}

export function* setVideoAsYoutubeRestricted(action: actionstypes.ISongRequestsSetVideoAsYoutubeRestrictedAction) {
    yield call(API.setVideoAsYoutubeRestrictred, action.payload.channelID, action.payload.videoID);
}

export function* setVideoAsTwitchRestricted(action: actionstypes.ISongRequestsSetVideoAsTwitchRestrictedAction) {
    yield call(API.setVideoAsTwitchRestrictred, action.payload.channelID, action.payload.videoID);
}

export function* setVideoAsChannelRestricted(action: actionstypes.ISongRequestsSetVideoAsChannelRestrictedAction) {
    yield call(API.setVideoAsChannelRestrictred, action.payload.channelID, action.payload.videoID);
}

export function* bubbleVideoUp(action: actionstypes.ISongRequestsBubbleVideoUpAction) {
    yield call(API.bubbleVideoUp, action.payload.channelID, action.payload.videoID);
}

export function* bubbleVideoToSecond(action: actionstypes.ISongRequestsBubbleVideoToSecondAction) {
    yield call(API.bubbleVideoToSecond, action.payload.channelID, action.payload.videoID);
}

export function* skipVideo(action: actionstypes.ISongRequestsSkipVideoAction) {
    yield call(API.skipVideo, action.payload.channelID, action.payload.videoID);
    yield call(getSongRequests, actions.get(action.payload.channelID));
}

export default function* saga() {
    yield takeEvery(actionstypes.actiontypes.GET, getSongRequests);
    yield takeEvery(actionstypes.actiontypes.SAVE, saveSongRequestsSettings);
    yield takeLatest(actionstypes.actiontypes.SAVEVOLUME, saveVolume);
    yield takeEvery(actionstypes.actiontypes.SETVIDEOASYOUTUBERESTRICTED , setVideoAsYoutubeRestricted);
    yield takeEvery(actionstypes.actiontypes.SETVIDEOASTWITCHRESTRICTED , setVideoAsTwitchRestricted);
    yield takeEvery(actionstypes.actiontypes.SETVIDEOASCHANNELRESTRICTED , setVideoAsChannelRestricted);
    yield takeEvery(actionstypes.actiontypes.BUBBLEVIDEOUP, bubbleVideoUp);
    yield takeEvery(actionstypes.actiontypes.BUBBLEVIDEOTOSECOND, bubbleVideoToSecond);
    yield takeEvery(actionstypes.actiontypes.SKIPVIDEO, skipVideo);
}
