import * as H from "history";
import { ISubDay } from "../subday/types";
import * as actions from "./actions";

export const get = (channelID: string, init: boolean = true): actions.ISubDaysGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.ISubDaysLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: ISubDay[]): actions.ISubDaysReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.ISubDaysNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const forbidden = (channelID: string): actions.ISubDaysForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.ISubDaysOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const showCreationPanel: actions.ISubDaysShowCreationPanelAction = {
    type: actions.actiontypes.SHOWCREATIONPANEL,
};

export const hideCreationPanel: actions.ISubDaysHideCreationPanelAction = {
    type: actions.actiontypes.HIDECREATIONPANEL,
};

export const create = (channelID: string,
                       name: string,
                       subsOnly: boolean,
                       history: H.History): actions.ISubDaysCreateAction =>
    ({
        payload: { channelID, history, name, subsOnly },
        type: actions.actiontypes.CREATE,
    }
    );

export const onSaveError: actions.ISubDaysOnSaveError = {
    type: actions.actiontypes.ONSAVEERROR,
};

export const reset: actions.ISubDaysResetAction = {
    type: actions.actiontypes.RESET,
};
