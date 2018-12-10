import { IUserLogsInfo } from "../userLogs/types";
import * as actions from "./actions";

export const get = (channelID: string, userName?: string): actions.IChannelUsersGetAction => ({
    payload: { channelID, userName },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string, userName?: string): actions.IChannelUsersLoadingAction => ({
    payload: { channelID, userName },
    type: actions.actiontypes.LOADING,
});

export const offline = (): actions.IChannelUsersOfflineAction => ({
    type: actions.actiontypes.OFFLINE,
});

export const forbidden = (channelID: string): actions.IChannelUsersForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const notAuthorized = (): actions.IChannelUsersNotAuthorizedAction => ({
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const ready = (users: IUserLogsInfo[]): actions.IChannelUsersReadyAction => ({
    payload: users,
    type: actions.actiontypes.READY,
});
