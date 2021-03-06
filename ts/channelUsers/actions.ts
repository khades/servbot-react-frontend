import { IUserLogsInfo } from "../userLogs/types";

export enum actiontypes {
    READY = "CHANNELUSERS/READY",
    GET = "CHANNELUSERS/GET",
    NOTAUTHORIZED = "CHANNELUSERS/NOTAUTHORIZED",
    LOADING = "CHANNELUSERS/LOADING",
    OFFLINE = "CHANNELUSERS/OFFLINE",
    FORBIDDEN = "CHANNELUSERS/FORBIDDEN",
    RESET = "CHANNELUSERS/RESET",

}

export interface IChannelUsersReadyAction {
    type: actiontypes.READY;
    payload: IUserLogsInfo[];
}

export interface IChannelUsersGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string;
        userName?: string;
    };
}

export interface IChannelUsersForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string;
    };
}
export interface IChannelUsersNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
}

export interface IChannelUsersOfflineAction {
    type: actiontypes.OFFLINE;
}

export interface IChannelUsersLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string;
        userName?: string;
    };
}

export interface IChannelUsersResetAction {
    type: actiontypes.RESET;
}

export type ChannelUsersAction = IChannelUsersGetAction
    | IChannelUsersReadyAction
    | IChannelUsersOfflineAction
    | IChannelUsersForbiddenAction
    | IChannelUsersNotAuthorizedAction
    | IChannelUsersLoadingAction
    | IChannelUsersResetAction;
