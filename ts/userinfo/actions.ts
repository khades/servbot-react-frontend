import { IUserInfo } from "../api/types";

export enum actiontypes {
    READY = "USERINFO/READY",
    GET = "USERINFO/GET",
    NOTAUTHORIZED = "USERINFO/NOTAUTHORIZED",
    LOADING = "USERINFO/LOADING",
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
export  type UserInfoAction = IUserInfoGetAction
    | IUserInfoNotAuthorizedAction
    | IUserInfoReadyAction
    | IUserInfoLoadingAction;
