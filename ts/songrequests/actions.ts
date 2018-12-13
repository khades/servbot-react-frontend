import { ISongRequests, ISongRequestsSettings } from "./types";

export enum actiontypes {
    GET = "SONGREQUESTS/GET",
    LOADING = "SONGREQUESTS/LOADING",
    READY = "SONGREQUESTS/READY",
    NOTAUTHORIZED = "SONGREQUESTS/NOTAUTHORIZED",
    NOTFOUND = "SONGREQUESTS/NOTFOUND",
    FORBIDDEN = "SONGREQUESTS/FORBIDDEN",
    OFFLINE = "SONGREQUESTS/OFFLINE",
    SAVE = "SONGREQUESTS/SAVE",
    ONSAVEERROR = "SONGREQUESTS/ONSAVEERROR",
    SAVEVOLUME = "SONGREQUESTS/SAVEVOLUME",
    GOTOBANNEDTRACKS = "SONGREQUESTS/GOTOBANNEDTRACKS",
    GOTOSETTINGS = "SONGREQUESTS/GOTOSETTINGS",
    GOTOPLAYLIST = "SONGREQUESTS/GOTOPLAYLIST",

    SETVIDEOASYOUTUBERESTRICTED = "SONGREQUESTS/SETVIDEOASYOUTUBERESTRICTED",
    SETVIDEOASTWITCHRESTRICTED = "SONGREQUESTS/SETVIDEOASTWITCHRESTRICTED",
    SETVIDEOASCHANNELRESTRICTED = "SONGREQUESTS/SETVIDEOASCHANNELRESTRICTED",
    BUBBLEVIDEOUP = "SONGREQUESTS/BUBBLEVIDEOUP",
    BUBBLEVIDEOTOSECOND = "SONGREQUESTS/BUBBLEVIDEOTOSECOND",
    SKIPVIDEO = "SONGREQUESTS/SKIPVIDEO",
}

export interface ISongRequestsGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface ISongRequestsLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface ISongRequestsReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ISongRequests,
    };
}

export interface ISongRequestsNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface ISongRequestsForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface ISongRequestsNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}

export interface ISongRequestsOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface ISongRequestsSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        content: ISongRequestsSettings,
    };
}

export interface ISongRequestsOnSaveErrorAction {
    type: actiontypes.ONSAVEERROR;
    payload: {
        channelID: string,
    };
}

export interface ISongRequestsSaveVolumeAction {
    type: actiontypes.SAVEVOLUME;
    payload: {
        channelID: string,
        volume: number,
    };
}

export interface ISongRequestGoToPlaylistAction {
    type: actiontypes.GOTOPLAYLIST;
}

export interface ISongRequestGoToBannedTracksAction {
    type: actiontypes.GOTOBANNEDTRACKS;
}

export interface ISongRequestGoToSettingsAction {
    type: actiontypes.GOTOSETTINGS;
}

export interface ISongRequestsSetVideoAsYoutubeRestrictedAction {
    type: actiontypes.SETVIDEOASYOUTUBERESTRICTED;
    payload: {
        channelID: string,
        videoID: string,
    };
}

export interface ISongRequestsSetVideoAsTwitchRestrictedAction {
    type: actiontypes.SETVIDEOASTWITCHRESTRICTED;
    payload: {
        channelID: string,
        videoID: string,
    };
}

export interface ISongRequestsSetVideoAsChannelRestrictedAction {
    type: actiontypes.SETVIDEOASCHANNELRESTRICTED;
    payload: {
        channelID: string,
        videoID: string,
    };
}

export interface ISongRequestsBubbleVideoUpAction {
    type: actiontypes.BUBBLEVIDEOUP;
    payload: {
        channelID: string,
        videoID: string,
    };
}

export interface ISongRequestsBubbleVideoToSecondAction {
    type: actiontypes.BUBBLEVIDEOTOSECOND;
    payload: {
        channelID: string,
        videoID: string,
    };
}

export interface ISongRequestsSkipVideoAction {
    type: actiontypes.SKIPVIDEO;
    payload: {
        channelID: string,
        videoID: string,
    };
}

export type SongRequestsAction = ISongRequestsGetAction
    | ISongRequestsLoadingAction
    | ISongRequestsReadyAction
    | ISongRequestsNotAuthorizedAction
    | ISongRequestsForbiddenAction
    | ISongRequestsNotFoundAction
    | ISongRequestsOfflineAction
    | ISongRequestsSaveAction
    | ISongRequestsOnSaveErrorAction
    | ISongRequestGoToPlaylistAction
    | ISongRequestGoToBannedTracksAction
    | ISongRequestGoToSettingsAction
    | ISongRequestsSetVideoAsYoutubeRestrictedAction
    | ISongRequestsSetVideoAsTwitchRestrictedAction
    | ISongRequestsSetVideoAsChannelRestrictedAction
    | ISongRequestsBubbleVideoUpAction
    | ISongRequestsBubbleVideoToSecondAction
    | ISongRequestsSkipVideoAction;
