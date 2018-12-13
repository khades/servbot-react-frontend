
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

import { SubDayAction } from "./subday/actions";
import SubDay, { ISubDayState } from "./subday/reducer";

import { SubDaysAction } from "./subdays/actions";
import SubDays, { ISubDaysState } from "./subdays/reducer";

import { SubscriptionsAction } from "./subscriptions/actions";
import Subscriptions, { ISubscriptionsState } from "./subscriptions/reducer";

import { SubTrainAction } from "./subtrain/actions";
import SubTrain, { ISubTrainState } from "./subtrain/reducer";

import { ExternalServicesAction } from "./externalservices/actions";
import ExternalServices, { IExternalServicesState } from "./externalservices/reducer";

import { SongRequestsAction } from "./songrequests/actions";
import SongRequests, { ISongRequestsState } from "./songrequests/reducer";

import { BannedTracksAction } from "./bannedtracks/actions";
import BannedTracks, { IBannedTracksState } from "./bannedtracks/reducer";

import { StatusWrapperAction } from "./statuswrapper/actions";
import StatusWrapper, { IStatusWrapperState } from "./statuswrapper/reducer";
// import { routerReducer } from "react-router-redux";

export interface IStore {
  readonly AutoMessage: IAutoMessageState;
  readonly AutoMessages: IAutoMessagesState;
  readonly BannedTracks: IBannedTracksState;
  readonly ExternalServices: IExternalServicesState;
  readonly SongRequests: ISongRequestsState;
  readonly StatusWrapper: IStatusWrapperState;
  readonly SubDay: ISubDayState;
  readonly SubDays: ISubDaysState;
  readonly SubTrain: ISubTrainState;
  readonly Subscriptions: ISubscriptionsState;
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
  | BannedTracksAction
  | ChannelNameAction
  | ChannelUsersAction
  | ExternalServicesAction
  | NotificationsAction
  | SideMenuAction
  | SongRequestsAction
  | StatusWrapperAction
  | SubAlertsAction
  | SubDayAction
  | SubDaysAction
  | SubTrainAction
  | SubscriptionsAction
  | TemplateAction
  | TemplatesAction
  | UserInfoAction
  | UserLogsAction;

export default combineReducers<IStore, actions>({
  AutoMessage,
  AutoMessages,
  BannedTracks,
  ExternalServices,
  SongRequests,
  StatusWrapper,
  SubDay,
  SubDays,
  SubTrain,
  Subscriptions,
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
