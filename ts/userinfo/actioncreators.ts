import * as actions from "./actions";
import { IUserInfo } from "./types";

export const get = (): actions.IUserInfoGetAction => ({ type: actions.actiontypes.GET });

export const notAuthorized = (): actions.IUserInfoNotAuthorizedAction =>
    ({ type: actions.actiontypes.NOTAUTHORIZED });

export const loading = (): actions.IUserInfoLoadingAction =>
    ({ type: actions.actiontypes.LOADING });

export const offline = (): actions.IUserInfoOfflineAction =>
    ({ type: actions.actiontypes.OFFLINE });

export const ready = (payload: IUserInfo): actions.IUserInfoReadyAction => ({
    payload,
    type: actions.actiontypes.READY,
});

export const setChannel = (payload: string): actions.IUserInfoSetChannelAction => ({
    payload,
    type: actions.actiontypes.SETCHANNEL,
});
