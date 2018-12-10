import { ITemplate } from "../template/types";
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

export const offline = (channelID: string): actions.ITemplatesOfflineAction => ({
    payload: { channelID },
    type: actions.actiontypes.OFFLINE,
});

export const ready = (channelID: string, content: ITemplate[]): actions.ITemplatesReadyAction => ({
    payload: { content, channelID },
    type: actions.actiontypes.READY,
});

export const showAll = (): actions.ITemplatesShowAllAction => ({ type: actions.actiontypes.SHOWALL });

export const showNonEmpty = (): actions.ITemplatesShowNonEmptyAction => ({ type: actions.actiontypes.SHOWNONEMPTY });

export const showTemplates = (): actions.ITemplatesShowTemplatesAction => ({ type: actions.actiontypes.SHOWTEMPLATES });

export const showGoTo = (): actions.ITemplatesShowGoToAction => ({ type: actions.actiontypes.SHOWGOTO });

export const setGoTo = (goTo: string): actions.ITemplatesSetGoToAction => ({
    payload: goTo,
    type: actions.actiontypes.SETGOTO,
});
