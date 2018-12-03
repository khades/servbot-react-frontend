import { ISubTrain, ISubTrainForm } from "../api/types";

export enum actiontypes {
    GET = "SUBTRAIN/GET",
    LOADING = "SUBTRAIN/LOADING",
    READY = "SUBTRAIN/READY",
    NOTAUTHORIZED = "SUBTRAIN/NOTAUTHORIZED",
    NOTFOUND= "SUBTRAIN/NOTFOUND",
    FORBIDDEN = "SUBTRAIN/FORBIDDEN",
    OFFLINE = "SUBTRAIN/OFFLINE",
    SAVE = "SUBTRAIN/SAVE",
    ONSAVEERROR = "SUBTRAIN/ONSAVEERROR",
}

export interface ISubTrainGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface ISubTrainLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface ISubTrainReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ISubTrain,
    };
}

export interface ISubTrainNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface ISubTrainForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface ISubTrainNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}

export interface ISubTrainOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface ISubTrainSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        content: ISubTrainForm,
    };
}

export interface ISubTrainOnSaveErrorAction {
    type: actiontypes.ONSAVEERROR;
    payload: {
        channelID: string,
    };
}

export type SubTrainAction = ISubTrainGetAction
    | ISubTrainLoadingAction
    | ISubTrainReadyAction
    | ISubTrainNotAuthorizedAction
    | ISubTrainForbiddenAction
    | ISubTrainNotFoundAction
    | ISubTrainOfflineAction
    | ISubTrainSaveAction
    | ISubTrainOnSaveErrorAction;
