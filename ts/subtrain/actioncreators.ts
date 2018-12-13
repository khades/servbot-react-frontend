import * as actions from "./actions";
import { ISubTrain, ISubTrainForm } from "./types";

export const get = (channelID: string, init: boolean = true): actions.ISubTrainGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.ISubTrainLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: ISubTrain): actions.ISubTrainReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.ISubTrainNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string): actions.ISubTrainNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string): actions.ISubTrainForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.ISubTrainOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const save = (channelID: string, content: ISubTrainForm): actions.ISubTrainSaveAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.SAVE,
});

export const onSaveError = (channelID: string): actions.ISubTrainOnSaveErrorAction => ({
    payload: { channelID },
    type: actions.actiontypes.ONSAVEERROR,
});

export const reset: actions.ISubTrainResetAction = {
    type: actions.actiontypes.RESET,
};
