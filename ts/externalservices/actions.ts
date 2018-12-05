import { IChannelInfo, IVkGroupInfoForm } from "../api/types";

export enum actiontypes {
    GET = "EXTERNALSERVICES/GET",
    LOADING = "EXTERNALSERVICES/LOADING",
    READY = "EXTERNALSERVICES/READY",
    NOTAUTHORIZED = "EXTERNALSERVICES/NOTAUTHORIZED",
    NOTFOUND = "EXTERNALSERVICES/NOTFOUND",
    FORBIDDEN = "EXTERNALSERVICES/FORBIDDEN",
    OFFLINE = "EXTERNALSERVICES/OFFLINE",
    SAVE = "EXTERNALSERVICES/SAVE",
    ONSAVEERROR = "EXTERNALSERVICES/ONSAVEERROR",
}

export interface IExternalServicesGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
    };
}

export interface IExternalServicesLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface IExternalServicesReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: IChannelInfo,
    };
}

export interface IExternalServicesNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface IExternalServicesForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface IExternalServicesNotFoundAction {
    type: actiontypes.NOTFOUND;
    payload: {
        channelID: string,
    };
}

export interface IExternalServicesOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface IExternalServicesSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        content: IVkGroupInfoForm,
    };
}

export interface IExternalServicesOnSaveErrorAction {
    type: actiontypes.ONSAVEERROR;
    payload: {
        channelID: string,
    };
}

export type ExternalServicesAction = IExternalServicesGetAction
    | IExternalServicesLoadingAction
    | IExternalServicesReadyAction
    | IExternalServicesNotAuthorizedAction
    | IExternalServicesForbiddenAction
    | IExternalServicesNotFoundAction
    | IExternalServicesOfflineAction
    | IExternalServicesSaveAction
    | IExternalServicesOnSaveErrorAction;
