import { ITemplate, ITemplateWithHistory } from "../api/types";

export enum actiontypes {
    GET = "TEMPLATE/GET",
    LOADING = "TEMPLATE/LOADING",
    READY = "TEMPLATE/READY",
    NOTAUTHORIZED = "TEMPLATE/NOTAUTHORIZED",
    OFFLINE = "TEMPLATE/OFFLINE",
    SAVE = "TEMPLATE/SAVE",
    FORBIDDEN = "TEMPLATE/FORBIDDEN",
    AFTERSAVESUCCESS = "TEMPLATE/AFTERSAVESUCCESS",
    AFTERSAVEERROR = "TEMPLATE/AFTERSAVEERROR",
    SETALIASTO = "TEMPLATE/SETALIASTO",
}

export interface ITemplateGetAction {
    type: actiontypes.GET;
    payload: {
        init: boolean;
        channelID: string,
        commandName: string,
    };
}

export interface ITemplateLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
        commandName: string,

    };
}
export interface ITemplateOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
        channelID: string,
        commandName: string,

    };
}

export interface ITemplateReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        commandName: string,
        template: ITemplateWithHistory,
    };
}

export interface ITemplateNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
        commandName: string,
    };
}

export interface ITemplateSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        commandName: string,
        template: string,
    };
}
export interface ITemplateSetAliasToAction {
    type: actiontypes.SETALIASTO;
    payload: {
        channelID: string,
        commandName: string,
        aliasTo: string,
    };
}
export interface ITemplateForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
        commandName: string,
    };
}

export interface ITemplateAfterSaveErrorAction {
    type: actiontypes.AFTERSAVEERROR;
    payload: {
        channelID: string,
        commandName: string,
    };
}

export interface ITemplateAfterSaveSuccessAction {
    type: actiontypes.AFTERSAVESUCCESS;
    payload: {
        channelID: string,
        commandName: string,
    };
}

export type TemplateAction = ITemplateGetAction
    | ITemplateLoadingAction
    | ITemplateReadyAction
    | ITemplateOfflineAction
    | ITemplateNotAuthorizedAction
    | ITemplateSaveAction
    | ITemplateForbiddenAction
    | ITemplateAfterSaveErrorAction
    | ITemplateSetAliasToAction
    | ITemplateAfterSaveSuccessAction;
