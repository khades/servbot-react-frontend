
import { combineReducers } from "redux";
import bans, { IBansState } from "./bans/reducer";
import channelName, { IChannelNameStore } from "./channelName/reducer";
import channelUsers, { IChannelUsersState } from "./channelUsers/reducer";
import notifications, { INotification } from "./notifications/reducer";
import sideMenu, { ISideMenuStore } from "./sidemenu/reducer";
import templates, { ITemplateState } from "./templates/reducer";
import userInfo, { IUserInfoState } from "./userinfo/reducer";
import userLogs, { IUserLogsState } from "./userLogs/reducer";

export interface IStore {
  readonly bans: IBansState;
  readonly channelName: IChannelNameStore;
  readonly channelUsers: IChannelUsersState;
  readonly notifications: INotification[];
  readonly sideMenu: ISideMenuStore;
  readonly templates: ITemplateState;
  readonly userInfo: IUserInfoState;
  readonly userLogs: IUserLogsState;
}

export default combineReducers<IStore, {}>({
  bans,
  channelName,
  channelUsers,
  notifications,
  sideMenu,
  templates,
  userInfo,
  userLogs,
});
