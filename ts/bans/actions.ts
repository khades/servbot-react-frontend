import { IBan } from "./types";

export enum actiontypes {
    GET = "BANS/GET",
    LOADING = "BANS/LOADING",
    READY = "BANS/READY",
    NOTFOUND = "BANS/NOTFOUND",
    NOTAUTHORIZED = "BANS/NOTAUTHORIZED",
    FORBIDDEN = "BANS/FORBIDDEN",
    OFFLINE = "BANS/OFFLINE",
    RESET = "BANS/RESET",
}

export interface IBansGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
    };
}

export interface IBansLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}
export interface IBansForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface IBansReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        bans: IBan[],
    };
}

export interface IBansNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}
export interface IBansNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface IBansOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
        channelID: string,
    };
}

export interface IBansResetAction {
    type: actiontypes.RESET;
}

export type BansAction = IBansGetAction
    | IBansLoadingAction
    | IBansReadyAction
    | IBansForbiddenAction
    | IBansNotFoundAction
    | IBansOfflineAction
    | IBansNotAuthorizedAction
    | IBansResetAction;
