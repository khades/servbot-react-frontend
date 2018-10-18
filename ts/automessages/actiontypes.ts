export enum actiontypes {
    GET = "AUTOMESSAGES/GET",
    LOADING = "AUTOMESSAGES/LOADING",
    READY = "AUTOMESSAGES/READY",
    NOTAUTHORIZED = "AUTOMESSAGES/NOTAUTHORIZED",
    NOTFOUND= "AUTOMESSAGES/NOTFOUND",
    FORBIDDEN = "AUTOMESSAGES/FORBIDDEN",
    OFFLINE = "AUTOMESSAGES/OFFLINE",
    SAVE = "AUTOMESSAGES/SAVE",
    ONSAVEERROR = "AUTOMESSAGES/ONSAVEERROR",
};

export interface IAutoMessagesGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
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
        content: 234,
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

export interface IAutoMessagesOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
        channelID: string,
    };
}

export interface IAutoMessagesSaveAction {
    type: actiontypes.SAVE;
    payload: {
        channelID: string,
        content: ,
    };
}

export interface IAutoMessagesOnSaveErrorAction {
    type: actiontypes.ONSAVEERROR;
    payload: {
        channelID: string,
    };
}

export type AutoMessagesAction = IAutoMessagesGetAction
    | IAutoMessagesLoadingAction
    | ReadyAction
    | NotAuthorizedAction 
    | ForbiddenAction
    | NotOfflineAction
    | SaveAction
    | IAutoMessagesSaveErrorAction