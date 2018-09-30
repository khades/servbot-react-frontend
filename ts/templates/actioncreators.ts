import { ITemplate } from "../api/types";
import * as actions from "./actions";

export const get = (channelID: string): actions.ITemplatesGetAction => ({
    payload: { channelID },
    type: actions.actiontypes.GET,
});

export const loading = (channelID: string): actions.ITemplatesLoadingAction => ({
    payload: { channelID },
    type: actions.actiontypes.LOADING,
});

export const notAuthorized = (channelID: string): actions.ITemplatesNotAuthorizedAction => ({
    payload: { channelID },
    type: actions.actiontypes.NOTAUTHORIZED,
});

export const ready = (channelID: string, content: ITemplate[]): actions.ITemplatesReadyAction => ({
    payload: { content, channelID },
    type: actions.actiontypes.READY,
});
