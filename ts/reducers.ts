
import { combineReducers } from "redux";

import { AutoMessagesAction } from "./autoMessages/actions";
import AutoMessages, { IAutoMessagesState } from "./autoMessages/reducer";

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

import { SubAlertsAction } from "./subAlerts/actions";
import subAlerts, { ISubAlertsState } from "./subAlerts/reducer";

export interface IStore {
  readonly AutoMessages: IAutoMessagesState;
  readonly bans: IBansState;
  readonly channelName: IChannelNameState;
  readonly channelUsers: IChannelUsersState;
  readonly notifications: INotification[];
  readonly sideMenu: ISideMenuState;
  readonly subAlerts: ISubAlertsState;
  readonly template: ITemplateState;
  readonly templates: ITemplatesState;
  readonly userInfo: IUserInfoState;
  readonly userLogs: IUserLogsState;
}

type actions = AutoMessagesAction
  | BansAction
  | ChannelNameAction
  | ChannelUsersAction
  | NotificationsAction
  | SideMenuAction
  | SubAlertsAction
  | TemplateAction
  | TemplatesAction
  | UserInfoAction
  | UserLogsAction;

export default combineReducers<IStore, actions>({
  AutoMessages,
  bans,
  channelName,
  channelUsers,
  notifications,
  sideMenu,
  subAlerts,
  template,
  templates,
  userInfo,
  userLogs,
});
