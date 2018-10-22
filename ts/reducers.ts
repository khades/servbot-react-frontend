
import { combineReducers } from "redux";

import { AutoMessagesAction } from "./autoMessages/actions";
import AutoMessages, { IAutoMessagesState } from "./autoMessages/reducer";

import { AutoMessageAction } from "./autoMessage/actions";
import AutoMessage, { IAutoMessageState } from "./autoMessage/reducer";

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

import { SubDaysAction } from "./subdays/actions";
import SubDays, { ISubDaysState } from "./subdays/reducer";

// import { routerReducer } from "react-router-redux";

export interface IStore {
  readonly AutoMessage: IAutoMessageState;
  readonly AutoMessages: IAutoMessagesState;
  readonly SubDays: ISubDaysState;
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

type actions = | AutoMessageAction
  | AutoMessagesAction
  | BansAction
  | ChannelNameAction
  | ChannelUsersAction
  | NotificationsAction
  | SideMenuAction
  | SubAlertsAction
  | SubDaysAction
  | TemplateAction
  | TemplatesAction
  | UserInfoAction
  | UserLogsAction;

export default combineReducers<IStore, actions>({
  AutoMessage,
  AutoMessages,
  SubDays,
  bans,
  channelName,
  channelUsers,
  notifications,
  // routerReducer,
  sideMenu,
  subAlerts,
  template,
  templates,
  userInfo,
  userLogs,
});
