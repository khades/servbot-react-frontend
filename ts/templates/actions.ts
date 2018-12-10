import { ITemplate } from "../template/types";

export enum actiontypes {
    GET = "TEMPLATES/GET",
    LOADING = "TEMPLATES/LOADING",
    READY = "TEMPLATES/READY",
    NOTAUTHORIZED = "TEMPLATES/NOTAUTHORIZED",
    OFFLINE = "TEMPLATES/OFFLINE",
    SHOWALL = "TEMPLATES/SHOWALL",
    SHOWNONEMPTY = "TEMPLATES/SHOWNONEMPTY",
    SHOWTEMPLATES = "TEMPLATES/SHOWTEMPLATES",
    SHOWGOTO = "TEMPLATES/SHOWGOTO",
    SETGOTO = "TEMPLATES/SETGOTO",
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

export interface ITemplatesShowAllAction {
    type: actiontypes.SHOWALL;
}

export interface ITemplatesShowNonEmptyAction {
    type: actiontypes.SHOWNONEMPTY;
}
export interface ITemplatesShowTemplatesAction {
    type: actiontypes.SHOWTEMPLATES;
}

export interface ITemplatesShowGoToAction {
    type: actiontypes.SHOWGOTO;
}

export interface ITemplatesSetGoToAction {
    type: actiontypes.SETGOTO;
    payload: string;
}

export type TemplatesAction = ITemplatesGetAction
    | ITemplatesLoadingAction
    | ITemplatesReadyAction
    | ITemplatesOfflineAction
    | ITemplatesNotAuthorizedAction
    | ITemplatesShowAllAction
    | ITemplatesShowTemplatesAction
    | ITemplatesShowGoToAction
    | ITemplatesSetGoToAction
    | ITemplatesShowNonEmptyAction;
