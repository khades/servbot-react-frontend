import { IUserLogsInfo } from "../api/types";

export enum actiontypes {
    READY = "CHANNELUSERS/READY",
    GET = "CHANNELUSERS/GET",
    NOTAUTHORIZED = "CHANNELUSERS/NOTAUTHORIZED",
    LOADING = "CHANNELUSERS/LOADING",
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

export interface IChannelUsersNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
}

export interface IChannelUsersLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string;
        userName?: string;
    };
}

export type ChannelUsersAction = IChannelUsersGetAction
    | IChannelUsersReadyAction
    | IChannelUsersNotAuthorizedAction
    | IChannelUsersLoadingAction;
