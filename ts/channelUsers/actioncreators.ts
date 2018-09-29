import { IUserLogsInfo } from "../api/types";
import * as actions from "./actions";

export const get = (channelID: string, userName?: string): actions.IChannelUsersGetAction => ({
    payload: { channelID, userName },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string, userName?: string): actions.IChannelUsersLoadingAction => ({
    payload: { channelID, userName },
    type: actions.actiontypes.LOADING,
});

export const notAuthorized = (): actions.IChannelUsersNotAuthorizedAction => ({
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const ready = (users: IUserLogsInfo[]): actions.IChannelUsersReadyAction => ({
    payload: users,
    type: actions.actiontypes.READY,
});
