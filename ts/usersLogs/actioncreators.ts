import { IUserLogsInfo } from "../api/types";
import * as actions from "./actions";

export const get = (channelID: string, userName?: string): actions.IUsersLogsGetAction => ({
    payload: { channelID, userName },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string, userName?: string): actions.IUsersLogsLoadingAction => ({
    payload: { channelID, userName },
    type: actions.actiontypes.LOADING,
});

export const notAuthorized = (): actions.IUsersLogsNotAuthorizedAction => ({
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const ready = (users: IUserLogsInfo[]): actions.IUsersLogsReadyAction => ({
    payload: users,
    type: actions.actiontypes.READY,
});
