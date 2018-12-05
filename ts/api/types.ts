import { number, string } from "prop-types";

export interface IUserInfo {
    avatarUrl: string;
    modChannels: IUserModInfo[];
    userID: string;
    username: string;
}

export interface IUserModInfo {
    channel: string;
    channelID: string;
}

export interface IUserLogsInfo {
    lastUpdate: number; // Date;
    user: string;
    userID: string;
    knownNicknames?: string[];
    messages?: IUserLogsMessage[];
    bans?: IUserLogsMessage[];
}

export enum MessageType {
    MESSAGE = "message",
    TIMEOUT = "timeout",
    UNTIMEOUT = "untimeout",
    BAN = "ban",
    UNBAN = "unban",
}

export interface IUserLogsMessage {
    banIssuer: string;
    banIssuerID: string;
    banLength: number;
    banReason: string;
    date: number; // Date;
    messageBody: string;
    messageType: MessageType;
    username: string;
}

export interface IBan {
    banLength: number;
    date: number; // Date;
    user: string;
    userID: string;
}

export interface ITemplate {
    aliasTo: string;
    channelID: string;
    commandName: string;
    template: string;
}

export interface ITemplateHistory {
    aliasTo: string;
    date: number; // Date;
    template: string;
    user: string;
    userID: string;
}

export interface ITemplateWithHistory extends ITemplate {
    history: ITemplateHistory[];
}

export interface ISubAlerts {
    enabled: boolean;
    followerMessage: string;
    resubFiveMessage: string;
    resubFiveSmile: string;
    resubPrimeMessage: string;
    resubPrimeSmile: string;
    resubTenMessage: string;
    resubTenSmile: string;
    resubTwentyFiveMessage: string;
    resubTwentyFiveSmile: string;
    subFiveMessage: string;
    subPrimeMessage: string;
    subTenMessage: string;
    subTwentyFiveMessage: string;
}

export interface ISubAlertsHistory extends ISubAlerts {
    date: number; // Date;
    user: string;
    userID: string;
}

export interface ISubAlertsWithHistory extends ISubAlerts {
    channelID: string;
    history: ISubAlertsHistory[];
}

export interface IAutoMessage {
    durationLimit: number;
    game: string;
    message: string;
    messageLimit: number;
}

export interface IAutoMessageHistory extends IAutoMessage {
    date: number; // Date;
    user: string;
    userID: string;
}

export interface IAutoMessageWithHistory extends IAutoMessage {
    channelID: string;
    id: string;
    durationThreshold: number; // Date;
    messageThreshold: number;
    history: IAutoMessageHistory[];
}

export interface IAutoMessageCreationResult {
    ID: string;
}

export interface ISubDay {
    channelID: string;
    date: string;
    id: string;
    name: string;
}

export interface ISubDayVote {
    user: string;
    userid: string;
    game: string;
    isSub: true;
}
export interface ISubDayFull extends ISubDay {
    isActive: boolean;
    subsOnly: boolean;
    closer: string;
    votes: ISubDayVote[];
    winners: ISubDayVote[];
    isMod: boolean;
}

export interface ISubscription {
    channelID: string;
    count: number;
    date: string;
    id: string;
    isPrime: boolean;
    subPlan: string;
    user: string;
    userID: string;
}

export interface ISubTrainForm {
    appendTemplate: string;
    enabled: boolean;
    expirationLimit: number;
    notificationLimit: number;
    notificationTemplate: string;
    onlyNewSubs: boolean;
    timeoutTemplate: string;
}

export interface ISubTrain extends ISubTrainForm {
    expirationTime: string;
    notificationTime: string;
    onlyNewSubs: boolean;
    token: string;
    users?: string[];
    currentStreak: number;
}
export interface IVkGroupInfoForm {
    groupName: string;
    notifyOnChange: boolean;
}

export interface IVkGroupInfo extends IVkGroupInfoForm {
    lastMessageBody: string;
    lastMessageDate: string;
    lastMessageID: number;
    lastMessageURL: string;
}

export interface IChannelExternalServices {
    vkGroupInfo: IVkGroupInfo;
}

export interface ICurrentSongRequest {
    count: number;
    duration: string;
    id: string;
    isPlaying: boolean;
    link: string;
    title: string;
    user: string;
    volume: number;
}

export interface IGamesHistory {
    game: string;
    gameID: string;
    start: string;
}

export interface IStreamStatus {
    game: string;
    gameID: string;
    gamesHistory: IGamesHistory[];
    lastOnlineTime: string;
    online: boolean;
    start: string;
    title: string;
    viewers: number;
}

export interface IChannelInfo {
    channel: string;
    channelId: string;
    commands: string[];
    enabled: boolean;
    extendedBansLogging: boolean;
    lang: string;
    mods: string[];
    songRequest: ICurrentSongRequest;
    streamStatus: IStreamStatus;
    subTrain: ISubTrain;
    subdayIsActive: boolean;
    vkGroupInfo: IVkGroupInfo;
}
