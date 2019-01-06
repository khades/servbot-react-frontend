import * as actions from "./actions";
import { IDonationSources } from "./types";

export const get = (channelID: string, init: boolean = true): actions.IDonationSourcesGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.IDonationSourcesLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: IDonationSources): actions.IDonationSourcesReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.IDonationSourcesNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string): actions.IDonationSourcesNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string): actions.IDonationSourcesForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.IDonationSourcesOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});
