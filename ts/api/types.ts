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
    lastUpdate: Date;
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
    date: Date;
    messageBody: string;
    messageType: MessageType;
    username: string;
}


