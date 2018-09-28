import { IUserToUserID } from "./reducer";

export enum actiontypes {
    READY = "USERSLOGS/READY",
    GET = "USERSLOGS/GET",
    NOTAUTHORIZED = "USERSLOGS/NOTAUTHORIZED",
    LOADING = "USERSLOGS/LOADING",
}

export interface IUsersLogsReadyAction {
    type: actiontypes.READY;
    payload: IUserToUserID[];
}

export interface IUsersLogsGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string;
        userName?: string;
    };
}

export interface IUsersLogsNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
}

export interface IUsersLogsLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string;
        userName?: string;
    };
}

export type UsersLogsAction = IUsersLogsGetAction
    | IUsersLogsReadyAction
    | IUsersLogsNotAuthorizedAction
    | IUsersLogsLoadingAction;
