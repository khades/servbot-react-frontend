import { ITemplate } from "../api/types";

export enum actiontypes {
    GET = "TEMPLATES/GET",
    LOADING = "TEMPLATES/LOADING",
    READY = "TEMPLATES/READY",
    NOTAUTHORIZED = "TEMPLATES/NOTAUTHORIZED",
    OFFLINE = "TEMPLATES/OFFLINE",
}

export interface ITemplatesGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
    };
}

export interface ITemplatesLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}
export interface ITemplatesOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
        channelID: string,
    };
}

export interface ITemplatesReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ITemplate[],
    };
}

export interface ITemplatesNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export type TemplatesAction = ITemplatesGetAction
    | ITemplatesLoadingAction
    | ITemplatesReadyAction
    | ITemplatesOfflineAction
    | ITemplatesNotAuthorizedAction;
