import { IAutoMessageWithHistory } from "../automessage/types";

export enum actiontypes {
    GET = "AUTOMESSAGES/GET",
    LOADING = "AUTOMESSAGES/LOADING",
    READY = "AUTOMESSAGES/READY",
    NOTAUTHORIZED = "AUTOMESSAGES/NOTAUTHORIZED",
    NOTFOUND = "AUTOMESSAGES/NOTFOUND",
    FORBIDDEN = "AUTOMESSAGES/FORBIDDEN",
    OFFLINE = "AUTOMESSAGES/OFFLINE",
    SHOWEMPTY = "AUTOMESSAGES/SHOWEMPTY",
    HIDEEMPTY = "AUTOMESSAGES/HIDEEMPTY",
    RESET = "AUTOMESSAGES/RESET",
}

export interface IAutoMessagesGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface IAutoMessagesLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface IAutoMessagesReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: IAutoMessageWithHistory[],
    };
}

export interface IAutoMessagesNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface IAutoMessagesForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface IAutoMessagesNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}

export interface IAutoMessagesOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
        channelID: string,
    };
}

export interface IAutoMessagesShowEmptyAction {
    type: actiontypes.SHOWEMPTY;
}

export interface IAutoMessagesHideEmptyAction {
    type: actiontypes.HIDEEMPTY;
}

export interface IAutoMessagesResetAction {
    type: actiontypes.RESET;
}

export type AutoMessagesAction = IAutoMessagesGetAction
    | IAutoMessagesLoadingAction
    | IAutoMessagesReadyAction
    | IAutoMessagesNotAuthorizedAction
    | IAutoMessagesForbiddenAction
    | IAutoMessagesNotFoundAction
    | IAutoMessagesShowEmptyAction
    | IAutoMessagesHideEmptyAction
    | IAutoMessagesOfflineAction
    | IAutoMessagesResetAction;
