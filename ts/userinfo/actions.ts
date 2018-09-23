import { IUserInfo } from "../api/types";

export enum actiontypes {
    READY = "USERINFO/READY",
    GET = "USERINFO/GET",
    NOTAUTHORIZED = "USERINFO/NOTAUTHORIZED",
    LOADING = "USERINFO/LOADING",
    SETCHANNEL = "USERINFO/SETCHANNEL",
}

export interface IUserInfoGetAction {
    type: actiontypes.GET;
}
export interface IUserInfoReadyAction {
    type: actiontypes.READY;
    payload: IUserInfo;
}
export interface IUserInfoNotAuthorizedAction {
    type: actiontypes.NOTAUTHORIZED;
}
export interface IUserInfoLoadingAction {
    type: actiontypes.LOADING;
}
export interface IUserInfoSetChannelAction {
    type: actiontypes.SETCHANNEL;
    payload: string;
}
export type UserInfoAction = IUserInfoGetAction
    | IUserInfoNotAuthorizedAction
    | IUserInfoReadyAction
    | IUserInfoLoadingAction
    | IUserInfoSetChannelAction;
