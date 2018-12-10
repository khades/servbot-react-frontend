import * as actions from "./actions";
import { ITemplateWithHistory } from "./types";

export const get = (channelID: string, commandName: string, init: boolean = true): actions.ITemplateGetAction => ({
    payload: { channelID, commandName, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string,
                        commandName: string,
): actions.ITemplateLoadingAction => ({
    payload: { channelID, commandName },
    type: actions.actiontypes.LOADING,
});

export const notAuthorized = (channelID: string, commandName: string): actions.ITemplateNotAuthorizedAction => ({
    payload: { channelID, commandName },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const offline = (channelID: string, commandName: string): actions.ITemplateOfflineAction => ({
    payload: { channelID, commandName },
    type: actions.actiontypes.OFFLINE,
});

export const forbidden = (channelID: string, commandName: string): actions.ITemplateForbiddenAction => ({
    payload: { channelID, commandName },
    type: actions.actiontypes.FORBIDDEN,
});

export const ready = (
    channelID: string,
    commandName: string,
    template: ITemplateWithHistory): actions.ITemplateReadyAction => ({
        payload: { channelID, commandName, template },
        type: actions.actiontypes.READY,
    }
    );

export const save = (channelID: string, commandName: string, template: string): actions.ITemplateSaveAction => ({
    payload: { channelID, commandName, template },
    type: actions.actiontypes.SAVE,
});

export const setAliasTo = (
    channelID: string,
    commandName: string,
    aliasTo: string): actions.ITemplateSetAliasToAction => ({
        payload: { aliasTo, channelID, commandName },
        type: actions.actiontypes.SETALIASTO,
    }
    );

export const afterSaveError = (channelID: string, commandName: string): actions.ITemplateAfterSaveErrorAction => ({
    payload: { channelID, commandName },
    type: actions.actiontypes.AFTERSAVEERROR,
});

export const afterSaveSuccess = (channelID: string, commandName: string): actions.ITemplateAfterSaveSuccessAction => ({
    payload: { channelID, commandName },
    type: actions.actiontypes.AFTERSAVESUCCESS,
});
