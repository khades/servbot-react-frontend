import { IAutoMessage, IAutoMessageWithHistory } from "../api/types";
import * as actions from "./actions";

export const get = (channelID: string, init: boolean = true): actions.IAutoMessagesGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.IAutoMessagesLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: IAutoMessageWithHistory[]): actions.IAutoMessagesReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.IAutoMessagesNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string): actions.IAutoMessagesNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string): actions.IAutoMessagesForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.IAutoMessagesOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const showEmpty: actions.IAutoMessagesShowEmptyAction = {
    type: actions.actiontypes.SHOWEMPTY,
};

export const hideEmpty: actions.IAutoMessagesHideEmptyAction = {
    type: actions.actiontypes.HIDEEMPTY,
};
