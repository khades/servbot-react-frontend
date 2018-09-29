
import { combineReducers } from "redux";
import channelName, { IChannelNameStore } from "./channelName/reducer";
import channelUsers, { IChannelUsersState } from "./channelUsers/reducer";
import notifications, { INotification } from "./notifications/reducer";
import sideMenu, { ISideMenuStore } from "./sidemenu/reducer";
import userInfo, { IUserInfoState } from "./userinfo/reducer";
import userLogs, { IUserLogsState } from "./userLogs/reducer";
export interface IStore {
  readonly channelName: IChannelNameStore;
  readonly channelUsers: IChannelUsersState;
  readonly notifications: INotification[];
  readonly sideMenu: ISideMenuStore;
  readonly userInfo: IUserInfoState;
  readonly userLogs: IUserLogsState;
}

export default combineReducers<IStore, {}>({
  channelName,
  channelUsers,
  notifications,
  sideMenu,
  userInfo,
  userLogs,
});
