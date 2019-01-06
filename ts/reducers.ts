
import { combineReducers } from "redux";

import { AutoMessagesAction } from "./automessages/actions";
import AutoMessages, { IAutoMessagesState } from "./automessages/reducer";

import { AutoMessageAction } from "./automessage/actions";
import AutoMessage, { IAutoMessageState } from "./automessage/reducer";

import { BansAction } from "./bans/actions";
import Bans, { IBansState } from "./bans/reducer";

import { ChannelNameAction } from "./channelName/actions";
import ChannelName, { IChannelNameState } from "./channelName/reducer";

import { ChannelUsersAction } from "./channelUsers/actions";
import ChannelUsers, { IChannelUsersState } from "./channelUsers/reducer";

import { NotificationsAction } from "./notifications/actions";
import Notifications, { INotification } from "./notifications/reducer";

import { SideMenuAction } from "./sidemenu/actions";
import SideMenu, { ISideMenuState } from "./sidemenu/reducer";

import { TemplateAction } from "./template/actions";
import Template, { ITemplateState } from "./template/reducer";

import { TemplatesAction } from "./templates/actions";
import Templates, { ITemplatesState } from "./templates/reducer";

import { UserInfoAction } from "./userinfo/actions";
import UserInfo, { IUserInfoState } from "./userinfo/reducer";

import { UserLogsAction } from "./userLogs/actions";
import UserLogs, { IUserLogsState } from "./userLogs/reducer";

import { SubAlertsAction } from "./subAlerts/actions";
import SubAlerts, { ISubAlertsState } from "./subAlerts/reducer";

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

import { StatusWrapperAction } from "./statusWrapper/actions";
import StatusWrapper, { IStatusWrapperState } from "./statusWrapper/reducer";

import { DonationSourcesAction } from "./donationSources/actions";
import DonationSources, { IDonationSourcesState } from "./donationSources/reducer";
// import { routerReducer } from "react-router-redux";

export interface IStore {
  readonly AutoMessage: IAutoMessageState;
  readonly AutoMessages: IAutoMessagesState;
  readonly BannedTracks: IBannedTracksState;
  readonly Bans: IBansState;
  readonly ChannelName: IChannelNameState;
  readonly ChannelUsers: IChannelUsersState;
  readonly DonationSources: IDonationSourcesState;
  readonly ExternalServices: IExternalServicesState;
  readonly Notifications: INotification[];
  readonly SideMenu: ISideMenuState;
  readonly SongRequests: ISongRequestsState;
  readonly StatusWrapper: IStatusWrapperState;
  readonly SubAlerts: ISubAlertsState;
  readonly SubDay: ISubDayState;
  readonly SubDays: ISubDaysState;
  readonly SubTrain: ISubTrainState;
  readonly Subscriptions: ISubscriptionsState;
  readonly Template: ITemplateState;
  readonly Templates: ITemplatesState;
  readonly UserInfo: IUserInfoState;
  readonly UserLogs: IUserLogsState;
}

type actions = | AutoMessageAction
  | AutoMessagesAction
  | BannedTracksAction
  | BansAction
  | ChannelNameAction
  | ChannelUsersAction
  | DonationSourcesAction
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
  Bans,
  ChannelName,
  ChannelUsers,
  DonationSources,
  ExternalServices,
  Notifications,
  SideMenu,
  SongRequests,
  StatusWrapper,
  SubAlerts,
  SubDay,
  SubDays,
  SubTrain,
  Subscriptions,
  Template,
  Templates,
  UserInfo,
  UserLogs,
});
