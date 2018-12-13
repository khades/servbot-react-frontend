import { ISubscription } from "./types";

export enum actiontypes {
    GET = "SUBSCRIPTIONS/GET",
    LOADING = "SUBSCRIPTIONS/LOADING",
    READY = "SUBSCRIPTIONS/READY",
    NOTAUTHORIZED = "SUBSCRIPTIONS/NOTAUTHORIZED",
    NOTFOUND = "SUBSCRIPTIONS/NOTFOUND",
    FORBIDDEN = "SUBSCRIPTIONS/FORBIDDEN",
    OFFLINE = "SUBSCRIPTIONS/OFFLINE",
    SAVE = "SUBSCRIPTIONS/SAVE",
    ONSAVEERROR = "SUBSCRIPTIONS/ONSAVEERROR",
    SETLIMIT = "SUBSCRIPTIONS/SETLIMIT",
    SAVELIMIT = "SUBSCRIPTIONS/SAVELIMIT",

    SETBOOKMARK = "SUBSCRIPTIONS/SETBOOKMARK",
    RESET = "SUBSCRIPTIONS/RESET",

}

export interface ISubscriptionsGetAction {
    type: actiontypes.GET;
    payload: {
        channelID: string,
        init: boolean,
        limit?: number,
    };
}

export interface ISubscriptionsLoadingAction {
    type: actiontypes.LOADING;
    payload: {
        channelID: string,
    };
}

export interface ISubscriptionsReadyAction {
    type: actiontypes.READY;
    payload: {
        channelID: string,
        content: ISubscription[],
    };
}

export interface ISubscriptionsNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
    payload: {
        channelID: string,
    };
}

export interface ISubscriptionsForbiddenAction {
    type: actiontypes.FORBIDDEN;
    payload: {
        channelID: string,
    };
}

export interface ISubscriptionsOfflineAction {
    type: actiontypes.OFFLINE;
    payload: {
    };
}

export interface ISubscriptionsSetLimitAction {
    type: actiontypes.SETLIMIT;
    payload: {
        channelID: string,
        limit: number,
    };
}
export interface ISubscriptionsSaveLimitAction {
    type: actiontypes.SAVELIMIT;
    payload: {
        channelID: string,
        limit: number,
    };
}

export interface ISubscriptionsSetBookmarkAction {
    type: actiontypes.SETBOOKMARK;
    payload: {
        channelID: string,
        bookmark: string,
    };
}

export interface ISubscriptionsResetAction {
    type: actiontypes.RESET;
}

export type SubscriptionsAction = ISubscriptionsGetAction
    | ISubscriptionsLoadingAction
    | ISubscriptionsReadyAction
    | ISubscriptionsNotAuthorizedAction
    | ISubscriptionsForbiddenAction
    | ISubscriptionsOfflineAction
    | ISubscriptionsSetLimitAction
    | ISubscriptionsSaveLimitAction
    | ISubscriptionsSetBookmarkAction
    | ISubscriptionsResetAction;
