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