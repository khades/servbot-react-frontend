import * as actions from "./actions";
import { ISubAlerts, ISubAlertsWithHistory } from "./types";

export const get = (channelID: string, init: boolean = true): actions.ISubAlertsGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.ISubAlertsLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const forbidden = (channelID: string): actions.ISubAlertsForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const notAuthorized = (channelID: string): actions.ISubAlertsNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const offline: actions.ISubAlertsOfflineAction = {
    type: actions.actiontypes.OFFLINE,
};

export const ready = (channelID: string, content: ISubAlertsWithHistory): actions.ISubAlertsReadyAction => ({
    payload: {
        channelID,
        content,
    },
    type: actions.actiontypes.READY,
});

export const save = (channelID: string, content: ISubAlerts): actions.ISubAlertsSaveAction => ({
    payload: {
        channelID,
        content,
    },
    type: actions.actiontypes.SAVE,
});

export const setExtended: actions.ISubAlertsSetExtendedAction = {
    type: actions.actiontypes.SETEXTENDED,
};
