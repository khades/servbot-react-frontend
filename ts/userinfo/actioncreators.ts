import { IUserInfo } from "../api/types";
import * as actions from "./actions";

export const get = (): actions.IUserInfoGetAction => ({ type: actions.actiontypes.GET });

export const notAuthorized = (): actions.IUserInfoNotAuthorizedAction =>
    ({ type: actions.actiontypes.NOTAUTHORIZED });

export const loading = (): actions.IUserInfoLoadingAction =>
    ({ type: actions.actiontypes.LOADING });

export const ready = (payload: IUserInfo): actions.IUserInfoReadyAction => ({
    payload,
    type: actions.actiontypes.READY,
});

export const setChannel = (payload: string): actions.IUserInfoSetChannelAction => ({
    payload,
    type: actions.actiontypes.SETCHANNEL,
});
