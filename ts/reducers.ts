
import { combineReducers } from "redux";

import { BansAction } from "./bans/actions";
import bans, { IBansState } from "./bans/reducer";

import { ChannelNameAction } from "./channelName/actions";
import channelName, { IChannelNameState } from "./channelName/reducer";

import { ChannelUsersAction } from "./channelUsers/actions";
import channelUsers, { IChannelUsersState } from "./channelUsers/reducer";

import { NotificationsAction } from "./notifications/actions";
import notifications, { INotification } from "./notifications/reducer";

import { SideMenuAction } from "./sidemenu/actions";
import sideMenu, { ISideMenuState } from "./sidemenu/reducer";

import { TemplateAction } from "./template/actions";
import template, { ITemplateState } from "./template/reducer";

import { TemplatesAction } from "./templates/actions";
import templates, { ITemplatesState } from "./templates/reducer";

import { UserInfoAction } from "./userinfo/actions";
import userInfo, { IUserInfoState } from "./userinfo/reducer";

import { UserLogsAction } from "./userLogs/actions";
import userLogs, { IUserLogsState } from "./userLogs/reducer";

export interface IStore {
  readonly bans: IBansState;
  readonly channelName: IChannelNameState;
  readonly channelUsers: IChannelUsersState;
  readonly notifications: INotification[];
  readonly sideMenu: ISideMenuState;
  readonly template: ITemplateState;
  readonly templates: ITemplatesState;
  readonly userInfo: IUserInfoState;
  readonly userLogs: IUserLogsState;
}

type actions = BansAction
  | ChannelNameAction
  | ChannelUsersAction
  | NotificationsAction
  | SideMenuAction
  | TemplateAction
  | TemplatesAction
  | UserInfoAction
  | UserLogsAction;

export default combineReducers<IStore, actions>({
  bans,
  channelName,
  channelUsers,
  notifications,
  sideMenu,
  template,
  templates,
  userInfo,
  userLogs,
});
