import * as actions from "./actions";
import { IUserLogsInfo } from "./types";

export const get = (channelID: string, userID: string): actions.IUserLogsGetAction => ({
    payload: { channelID, userID },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string, userID: string): actions.IUserLogsLoadingAction => ({
    payload: { channelID, userID },
    type: actions.actiontypes.LOADING,
});

export const notFound = (channelID: string, userID: string): actions.IUserLogsNotFoundAction => ({
    payload: { channelID, userID },
    type: actions.actiontypes.NOTFOUND,
});

export const notAuthorized = (channelID: string, userID: string): actions.IUserLogsNotAuthorizedAction => ({
    payload: { channelID, userID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const forbidden = (channelID: string, userID: string): actions.IUserLogsForbiddenAction => ({
    payload: { channelID, userID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (): actions.IUserLogsOfflineAction => ({
    type: actions.actiontypes.OFFLINE,
});

export const ready = (channelID: string, userID: string, content: IUserLogsInfo): actions.IUserLogsReadyAction => ({
    payload: { content, channelID, userID },
    type: actions.actiontypes.READY,
});
