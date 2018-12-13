import { call, put, takeEvery } from "redux-saga/effects";
import { l10n } from "../l10n/l10n";
import * as notificationActions from "../notifications/actioncreators";
import { concatStrings } from "../utils/concatStrings";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { actiontypes, IBannedTracksGetAction, IBannedTracksUnbanVideoAction } from "./actions";
import * as API from "./api";
import { IBannedTracks } from "./types";

export function* getBannedTracks(action: IBannedTracksGetAction) {
    if (action.payload.init === true) {
        yield put(actions.loading(action.payload.channelID));
    } else {
        yield put(actions.updating(action.payload.channelID));
    }
    try {
        const content: IBannedTracks = yield call(
            API.getBannedTracks,
            action.payload.channelID,
            action.payload.page);
        yield put(actions.ready(action.payload.channelID, content, action.payload.page));
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

export function* unbanVideo(action: IBannedTracksUnbanVideoAction) {
    yield call(API.unbanVideo, action.payload.channelID, action.payload.videoID);
    yield call(getBannedTracks, actions.get(action.payload.channelID));
    yield put(notificationActions.add(
        concatStrings(l10n.formatString(l10n.SONGREQUEST_UNBANNED, action.payload.title))),
    );

}

export default function* saga() {
    yield takeEvery(actiontypes.GET, getBannedTracks);
    yield takeEvery(actiontypes.UNBAN, unbanVideo);
}
