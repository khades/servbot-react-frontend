import { ISubDayFull } from "./types";

export enum actiontypes {
    GET = "SUBDAY/GET",
    LOADING = "SUBDAY/LOADING",
    READY = "SUBDAY/READY",
    NOTAUTHORIZED = "SUBDAY/NOTAUTHORIZED",
    NOTFOUND = "SUBDAY/NOTFOUND",
    FORBIDDEN = "SUBDAY/FORBIDDEN",
    OFFLINE = "SUBDAY/OFFLINE",
    PICKWINNER = "SUBDAY/PICKWINNER",
    PICKSUBWINNER = "SUBDAY/PICKSUBWINNER",
    PICKNONSUBWINNER = "SUBDAY/PICKNONSUBWINNER",
    PULLWINNER = "SUBDAY/PULLWINNER",
    CLOSE = "SUBDAY/CLOSE",
}

export interface ISubDayGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        id: string,
        init: boolean,
    };
}

export interface ISubDayLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ISubDayFull,
        id: string,
    };
}

export interface ISubDayNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface ISubDayPickWinnerAction {
    type: actiontypes.PICKWINNER;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayPickSubWinnerAction {
    type: actiontypes.PICKSUBWINNER;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayPickNonSubWinnerAction {
    type: actiontypes.PICKNONSUBWINNER;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayCloseAction {
    type: actiontypes.CLOSE;
    payload: {
        channelID: string,
        id: string,
    };
}

export interface ISubDayPullWinnerAction {
    type: actiontypes.PULLWINNER ;
    payload: {
        channelID: string,
        id: string,
        user: string,
    };
}

export type SubDayAction = ISubDayGetAction
    | ISubDayLoadingAction
    | ISubDayReadyAction
    | ISubDayNotAuthorizedAction
    | ISubDayForbiddenAction
    | ISubDayNotFoundAction
    | ISubDayOfflineAction
    | ISubDayPickWinnerAction
    | ISubDayPickSubWinnerAction
    | ISubDayPickNonSubWinnerAction
    | ISubDayPullWinnerAction
    | ISubDayCloseAction;
