import * as actions from "./actions";
import { ISubDayFull } from "./types";

export const get = (channelID: string, id: string, init: boolean = true): actions.ISubDayGetAction => ({
    payload: { channelID, id, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string, id: string): actions.ISubDayLoadingAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, id: string, content: ISubDayFull): actions.ISubDayReadyAction => ({
    payload: { channelID, content, id },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string, id: string): actions.ISubDayNotAuthorizedAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string, id: string): actions.ISubDayNotFoundAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string, id: string): actions.ISubDayForbiddenAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline: actions.ISubDayOfflineAction = {
    payload: {},
    type: actions.actiontypes.OFFLINE,
};

export const pickWinner = (channelID: string, id: string): actions.ISubDayPickWinnerAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.PICKWINNER,
});

export const pickSubWinner = (channelID: string, id: string): actions.ISubDayPickSubWinnerAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.PICKSUBWINNER,
});

export const pickNonSubWinner = (channelID: string, id: string): actions.ISubDayPickNonSubWinnerAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.PICKNONSUBWINNER,
});

export const close = (channelID: string, id: string): actions.ISubDayCloseAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.CLOSE,
});

export const pullWinner = (channelID: string, id: string, user: string): actions.ISubDayPullWinnerAction => ({
    payload: { channelID, id, user },
    type: actions.actiontypes.PULLWINNER,
});

export const reset: actions.ISubDayResetAction = {
    type: actions.actiontypes.RESET,
};
