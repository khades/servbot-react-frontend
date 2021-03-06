import * as actions from "./actions";
import { IBan } from "./types";

export const get = (channelID: string): actions.IBansGetAction => ({
    payload: { channelID },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.IBansLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const notFound = (channelID: string): actions.IBansNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const notAuthorized = (channelID: string): actions.IBansNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const forbidden = (channelID: string): actions.IBansForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const ready = (channelID: string, bans: IBan[]): actions.IBansReadyAction => ({
    payload: { bans, channelID },
    type: actions.actiontypes.READY,
});

export const offline = (channelID: string): actions.IBansOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const reset: actions.IBansResetAction = {
    type: actions.actiontypes.RESET,
};
