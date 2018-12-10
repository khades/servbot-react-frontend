import * as actions from "./actions";
import { IChannelExternalServices, IVkGroupInfoForm } from "./types";

export const get = (channelID: string, init: boolean = true): actions.IExternalServicesGetAction => ({
    payload: { channelID, init },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.IExternalServicesLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const ready = (channelID: string, content: IChannelExternalServices): actions.IExternalServicesReadyAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.READY,
});

export const notAuthorized = (channelID: string): actions.IExternalServicesNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const notFound = (channelID: string): actions.IExternalServicesNotFoundAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTFOUND,
});

export const forbidden = (channelID: string): actions.IExternalServicesForbiddenAction => ({
    payload: { channelID },
    type: actions.actiontypes.FORBIDDEN,
});

export const offline = (channelID: string): actions.IExternalServicesOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const save = (channelID: string, content: IVkGroupInfoForm): actions.IExternalServicesSaveAction => ({
    payload: { channelID, content },
    type: actions.actiontypes.SAVE,
});

export const onSaveError = (channelID: string): actions.IExternalServicesOnSaveErrorAction => ({
    payload: { channelID },
    type: actions.actiontypes.ONSAVEERROR,
});
