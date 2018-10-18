import { ISubAlerts, ISubAlertsWithHistory } from "../api/types";

export enum actiontypes {
    GET = "SUBALERTS/GET",
    LOADING = "SUBALERTS/LOADING",
    READY = "SUBALERTS/READY",
    NOTAUTHORIZED = "SUBALERTS/NOTAUTHORIZED",
    FORBIDDEN = "SUBALERTS/FORBIDDEN",
    OFFLINE = "SUBALERTS/OFFLINE",
    SETEXTENDED = "SUBALERTS/SETEXTENDED",
    SAVE = "SUBALERTS/SAVE",
}

export interface ISubAlertsGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface ISubAlertsLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface ISubAlertsNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface ISubAlertsForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface ISubAlertsOfflineAction {
    type: actiontypes.OFFLINE;
}

export interface ISubAlertsReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ISubAlertsWithHistory,
    };
}

export interface ISubAlertsSetExtendedAction {
    type: actiontypes.SETEXTENDED;
}

export interface ISubAlertsSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        content: ISubAlerts,
    };
}

export type SubAlertsAction = ISubAlertsGetAction
    | ISubAlertsLoadingAction
    | ISubAlertsNotAuthorizedAction
    | ISubAlertsForbiddenAction
    | ISubAlertsOfflineAction
    | ISubAlertsReadyAction
    | ISubAlertsSaveAction
    | ISubAlertsSetExtendedAction;
