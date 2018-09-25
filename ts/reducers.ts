
import { combineReducers } from "redux";

import channelName, { IChannelNameStore } from "./channelName/reducer";

import notifications, { INotification } from "./notifications/reducer";

import sideMenu, { ISideMenuStore } from "./sidemenu/reducer";

import userInfo, { IUserInfoState } from "./userinfo/reducer";

export interface IStore {
  readonly channelName: IChannelNameStore;
  readonly notifications: INotification[];
  readonly sideMenu: ISideMenuStore;
  readonly userInfo: IUserInfoState;
}

export default combineReducers<IStore, {}>({
  channelName,
  notifications,
  sideMenu,
  userInfo,
});
