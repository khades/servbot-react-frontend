import * as actions from "./actions";
import { ISongRequests, ISongRequestsSettings } from "./types";

export const get = (channelID: string, init: boolean = false): actions.ISongRequestsGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.ISongRequestsLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: ISongRequests): actions.ISongRequestsReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.ISongRequestsNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string): actions.ISongRequestsNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string): actions.ISongRequestsForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.ISongRequestsOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const save = (channelID: string, content: ISongRequestsSettings): actions.ISongRequestsSaveAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.SAVE,
});

export const onSaveError = (channelID: string): actions.ISongRequestsOnSaveErrorAction => ({
    payload: { channelID },
    type: actions.actiontypes.ONSAVEERROR,
});

export const saveVolume = (channelID: string, volume: number): actions.ISongRequestsSaveVolumeAction => ({
    payload: { channelID, volume },
    type: actions.actiontypes.SAVEVOLUME,
});

export const goToBannedTracks: actions.ISongRequestGoToBannedTracksAction = {
    type: actions.actiontypes.GOTOBANNEDTRACKS,
};

export const goToSettings: actions.ISongRequestGoToSettingsAction = {
    type: actions.actiontypes.GOTOSETTINGS,
};

export const goToPlaylist: actions.ISongRequestGoToPlaylistAction = {
    type: actions.actiontypes.GOTOPLAYLIST,
};

export const setVideoAsYoutubeRestricted = (
    channelID: string,
    videoID: string,
): actions.ISongRequestsSetVideoAsYoutubeRestrictedAction => ({
    payload: { channelID, videoID },
    type: actions.actiontypes.SETVIDEOASYOUTUBERESTRICTED,
});

export const setVideoAsTwitchRestricted = (
    channelID: string,
    videoID: string,
): actions.ISongRequestsSetVideoAsTwitchRestrictedAction => ({
    payload: { channelID, videoID },
    type: actions.actiontypes.SETVIDEOASTWITCHRESTRICTED,
});

export const setVideoAsChannelRestricted = (
    channelID: string,
    videoID: string,
): actions.ISongRequestsSetVideoAsChannelRestrictedAction => ({
    payload: { channelID, videoID },
    type: actions.actiontypes.SETVIDEOASCHANNELRESTRICTED,
});

export const bubbleVideoUp = (
    channelID: string,
    videoID: string,
): actions.ISongRequestsBubbleVideoUpAction => ({
    payload: { channelID, videoID },
    type: actions.actiontypes.BUBBLEVIDEOUP,
});

export const bubbleVideoToSecond = (
    channelID: string,
    videoID: string,
): actions.ISongRequestsBubbleVideoToSecondAction => ({
    payload: { channelID, videoID },
    type: actions.actiontypes.BUBBLEVIDEOTOSECOND,
});

export const skipVideo = (
    channelID: string,
    videoID: string,
): actions.ISongRequestsSkipVideoAction => ({
    payload: { channelID, videoID },
    type: actions.actiontypes.SKIPVIDEO,
});
