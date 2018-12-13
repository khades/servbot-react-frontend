import { IBannedTracks } from "./types";

export enum actiontypes {
    GET = "BANNEDTRACKS/GET",
    LOADING = "BANNEDTRACKS/LOADING",
    READY = "BANNEDTRACKS/READY",
    UPDATING = "BANNEDTRACKS/UPDATING",
    NOTAUTHORIZED = "BANNEDTRACKS/NOTAUTHORIZED",
    NOTFOUND = "BANNEDTRACKS/NOTFOUND",
    FORBIDDEN = "BANNEDTRACKS/FORBIDDEN",
    OFFLINE = "BANNEDTRACKS/OFFLINE",
    UNBAN = "BANNEDTRACKS/UNBAN",
    RESET = "BANNEDTRACKS/RESET",
}

export interface IBannedTracksGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        page: number,
        init: boolean,
    };
}

export interface IBannedTracksLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface IBannedTracksReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: IBannedTracks,
        page: number,
    };
}

export interface IBannedTracksUpdatingAction {
    type: actiontypes.UPDATING;
    payload: {
        channelID: string,
    };
}

export interface IBannedTracksNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface IBannedTracksForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface IBannedTracksNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}

export interface IBannedTracksOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface IBannedTracksUnbanVideoAction {
    type: actiontypes.UNBAN;
    payload: {
        title: string,
        channelID: string,
        videoID: string,
        page: number,
    };
}

export interface IBannedTracksResetAction {
    type: actiontypes.RESET;
}

export type BannedTracksAction = IBannedTracksGetAction
    | IBannedTracksLoadingAction
    | IBannedTracksReadyAction
    | IBannedTracksUpdatingAction
    | IBannedTracksNotAuthorizedAction
    | IBannedTracksForbiddenAction
    | IBannedTracksNotFoundAction
    | IBannedTracksOfflineAction
    | IBannedTracksUnbanVideoAction
    | IBannedTracksResetAction;
