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

export type SongRequestsAction = ISongRequestsGetAction
    | ISongRequestsLoadingAction
    | ISongRequestsReadyAction
    | ISongRequestsNotAuthorizedAction
    | ISongRequestsForbiddenAction
    | ISongRequestsNotFoundAction
    | ISongRequestsOfflineAction
    | ISongRequestsSaveAction
    | ISongRequestsOnSaveErrorAction;
