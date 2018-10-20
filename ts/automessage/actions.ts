import { IAutoMessage, IAutoMessageWithHistory } from "../api/types";

export enum actiontypes {
    GET = "AUTOMESSAGE/GET",
    LOADING = "AUTOMESSAGE/LOADING",
    READY = "AUTOMESSAGE/READY",
    NOTAUTHORIZED = "AUTOMESSAGE/NOTAUTHORIZED",
    NOTFOUND = "AUTOMESSAGE/NOTFOUND",
    FORBIDDEN = "AUTOMESSAGE/FORBIDDEN",
    OFFLINE = "AUTOMESSAGE/OFFLINE",
    CREATENEW = "AUTOMESSAGE/CREATENEW",
    SAVE = "AUTOMESSAGE/SAVE",
    SAVENEW = "AUTOMESSAGE/SAVENEW",
    ONSAVEERROR = "AUTOMESSAGE/ONSAVEERROR",
}

export interface IAutoMessageGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        id: string,
        init: boolean,
    };
}

export interface IAutoMessageLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface IAutoMessageReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: IAutoMessageWithHistory,
        id: string,
    };
}

export interface IAutoMessageNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface IAutoMessageForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface IAutoMessageNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface IAutoMessageOfflineAction {
    type: actiontypes.OFFLINE;
}

export interface IAutoMessageSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        content: IAutoMessage,
        id: string,
    };
}

export interface IAutoMessageSaveNewAction {
    type: actiontypes.SAVENEW;
    payload: {
        channelID: string,
        content: IAutoMessage,
    };
}

export interface IAutoMessageOnSaveErrorAction {
    type: actiontypes.ONSAVEERROR;
    payload: {
        channelID: string,
        id: string,
    };
}

export type AutoMessageAction = IAutoMessageGetAction
    | IAutoMessageLoadingAction
    | IAutoMessageReadyAction
    | IAutoMessageNotAuthorizedAction
    | IAutoMessageForbiddenAction
    | IAutoMessageNotFoundAction
    | IAutoMessageOfflineAction
    | IAutoMessageSaveAction
    | IAutoMessageSaveNewAction
    | IAutoMessageOnSaveErrorAction;
