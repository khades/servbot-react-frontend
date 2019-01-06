import { IDonationSources } from "./types";

export enum actiontypes {
    GET = "DONATIONSOURCES/GET",
    LOADING = "DONATIONSOURCES/LOADING",
    READY = "DONATIONSOURCES/READY",
    NOTAUTHORIZED = "DONATIONSOURCES/NOTAUTHORIZED",
    NOTFOUND= "DONATIONSOURCES/NOTFOUND",
    FORBIDDEN = "DONATIONSOURCES/FORBIDDEN",
    OFFLINE = "DONATIONSOURCES/OFFLINE",
    SAVE = "DONATIONSOURCES/SAVE",
    ONSAVEERROR = "DONATIONSOURCES/ONSAVEERROR",
}

export interface IDonationSourcesGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface IDonationSourcesLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface IDonationSourcesReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: IDonationSources,
    };
}

export interface IDonationSourcesNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface IDonationSourcesForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface IDonationSourcesNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}

export interface IDonationSourcesOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export type DonationSourcesAction = IDonationSourcesGetAction
    | IDonationSourcesLoadingAction
    | IDonationSourcesReadyAction
    | IDonationSourcesNotAuthorizedAction
    | IDonationSourcesForbiddenAction
    | IDonationSourcesNotFoundAction
    | IDonationSourcesOfflineAction;
