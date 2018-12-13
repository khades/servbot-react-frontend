import * as H from "history";
import { ISubDay } from "../subday/types";

export enum actiontypes {
    GET = "SUBDAYS/GET",
    LOADING = "SUBDAYS/LOADING",
    READY = "SUBDAYS/READY",
    NOTAUTHORIZED = "SUBDAYS/NOTAUTHORIZED",
    FORBIDDEN = "SUBDAYS/FORBIDDEN",
    OFFLINE = "SUBDAYS/OFFLINE",
    SHOWCREATIONPANEL = "SUBDAYS/SHOWCREATIONPANEL",
    HIDECREATIONPANEL = "SUBDAYS/HIDECREATIONPANEL",
    CREATE = "SUBDAYS/CREATE",
    ONSAVEERROR = "SUBDAYS/ONSAVEERROR",
    RESET = "SUBDAYS/RESET",
}

export interface ISubDaysGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface ISubDaysLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface ISubDaysReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ISubDay[],
    };
}

export interface ISubDaysNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface ISubDaysForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface ISubDaysOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface ISubDaysShowCreationPanelAction {
    type: actiontypes.SHOWCREATIONPANEL;
}

export interface ISubDaysHideCreationPanelAction {
    type: actiontypes.HIDECREATIONPANEL;
}

export interface ISubDaysCreateAction {
    type: actiontypes.CREATE;
    payload: {
        channelID: string,
        history: H.History,
        name: string,
        subsOnly: boolean,
    };
}

export interface ISubDaysOnSaveError {
    type: actiontypes.ONSAVEERROR;
}

export interface ISubDaysResetAction {
    type: actiontypes.RESET;
}

export type SubDaysAction = ISubDaysGetAction
    | ISubDaysLoadingAction
    | ISubDaysReadyAction
    | ISubDaysNotAuthorizedAction
    | ISubDaysForbiddenAction
    | ISubDaysOfflineAction
    | ISubDaysShowCreationPanelAction
    | ISubDaysHideCreationPanelAction
    | ISubDaysCreateAction
    | ISubDaysOnSaveError
    | ISubDaysResetAction;
