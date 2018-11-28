import { ISubscription } from "../api/types";
import * as actions from "./actions";

export const get = (channelID: string, init: boolean = true, limit?: number): actions.ISubscriptionsGetAction => ({
    payload: { channelID, init, limit },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.ISubscriptionsLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: ISubscription[]): actions.ISubscriptionsReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.ISubscriptionsNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const forbidden = (channelID: string): actions.ISubscriptionsForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.ISubscriptionsOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const setLimit = (channelID: string, limit: number): actions.ISubscriptionsSetLimitAction => ({
    payload: { channelID, limit },
    type: actions.actiontypes.SETLIMIT,
});

export const saveLimit = (channelID: string, limit: number): actions.ISubscriptionsSaveLimitAction => ({
    payload: { channelID, limit },
    type: actions.actiontypes.SAVELIMIT,
});

export const setBookmark = (channelID: string, bookmark: string): actions.ISubscriptionsSetBookmarkAction => ({
    payload: { channelID, bookmark },
    type: actions.actiontypes.SETBOOKMARK,
});
