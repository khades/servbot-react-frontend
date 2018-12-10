import { IUserLogsInfo } from "./types";

export enum actiontypes {
    GET = "USERLOGS/GET",
    LOADING = "USERLOGS/LOADING",
    READY = "USERLOGS/READY",
    NOTFOUND = "USERLOGS/NOTFOUND",
    NOTAUTHORIZED = "USERLOGS/NOTAUTHORIZED",
    FORBIDDEN = "USERLOGS/FORBIDDEN",
    OFFLINE = "USERLOGS/OFFLINE",
}

export interface IUserLogsGetAction {
    type: actiontypes.GET;
    payload: {
        userID: string,
        channelID: string,
    };
}

export interface IUserLogsLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        userID: string,
        channelID: string,
    };
}
export interface IUserLogsForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        userID: string,
        channelID: string,
    };
}

export interface IUserLogsReadyAction {
    type: actiontypes.READY;
    payload: {
        userID: string,
        channelID: string,
        content: IUserLogsInfo,
    };
}
export interface IUserLogsOfflineAction {
    type: actiontypes.OFFLINE;
}
export interface IUserLogsNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        userID: string,
        channelID: string,
    };
}
export interface IUserLogsNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        userID: string,
        channelID: string,
    };
}

export type UserLogsAction = IUserLogsGetAction
    | IUserLogsLoadingAction
    | IUserLogsReadyAction
    | IUserLogsForbiddenAction
    | IUserLogsNotFoundAction
    | IUserLogsOfflineAction
    | IUserLogsNotAuthorizedAction;
