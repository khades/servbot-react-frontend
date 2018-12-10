import * as actions from "./actions";
import { IAutoMessage, IAutoMessageWithHistory } from "./types";

export const get = (channelID: string, id: string, init: boolean = true): actions.IAutoMessageGetAction => ({
    payload: { channelID, id, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string, id: string): actions.IAutoMessageLoadingAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.LOADING,
});

export const ready = (
    channelID: string,
    id: string,
    content: IAutoMessageWithHistory,
): actions.IAutoMessageReadyAction => ({
    payload: { channelID, content, id },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string, id: string): actions.IAutoMessageNotAuthorizedAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string, id: string): actions.IAutoMessageNotFoundAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string, id: string): actions.IAutoMessageForbiddenAction => ({
    payload: { channelID, id },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline: actions.IAutoMessageOfflineAction = {
    type: actions.actiontypes.OFFLINE,
};

export const save = (channelID: string, id: string, content: IAutoMessage): actions.IAutoMessageSaveAction => ({
    payload: { channelID, content, id },
    type: actions.actiontypes.SAVE,
});

export const saveNew = (channelID: string, content: IAutoMessage): actions.IAutoMessageSaveNewAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.SAVENEW,
});

export const onSaveError = (channelID: string): actions.IAutoMessageOnSaveErrorAction => ({
    payload: { channelID },
    type: actions.actiontypes.ONSAVEERROR,
});

export const createNew = (channelID: string): actions.IAutoMessageCreateNewAction => ({
    payload: { channelID },
    type: actions.actiontypes.CREATENEW,
});

export const afterCreation = (id: string) => ({
    payload: { id },
    type: actions.actiontypes.AFTERCREATION,
});
