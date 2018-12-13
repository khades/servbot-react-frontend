import * as actions from "./actions";
import { IBannedTracks } from "./types";

export const get = (channelID: string, page: number = 1, init: boolean = false): actions.IBannedTracksGetAction => ({
    payload: { channelID, page, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.IBannedTracksLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: IBannedTracks, page: number): actions.IBannedTracksReadyAction => ({
    payload: { channelID, content, page },
    type: actions.actiontypes.READY,
});

export const updating = (channelID: string): actions.IBannedTracksUpdatingAction => ({
    payload: { channelID },
    type: actions.actiontypes.UPDATING,
});

export const notAuthorized = (channelID: string): actions.IBannedTracksNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string): actions.IBannedTracksNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string): actions.IBannedTracksForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.IBannedTracksOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const unbanVideo = (
    channelID: string,
    videoID: string,
    title: string,
    page: number,
): actions.IBannedTracksUnbanVideoAction => ({
    payload: { channelID, videoID, page, title },
    type: actions.actiontypes.UNBAN,
});

export const reset: actions.IBannedTracksResetAction = {
    type: actions.actiontypes.RESET,
};
