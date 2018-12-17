export interface IUserLogsInfo {
    lastUpdate: number; // Date;
    user: string;
    userID: string;
    knownNicknames?: string[];
    messages?: IUserLogsMessage[];
    bans?: IUserBansMessage[];
}

export enum MessageType {
    MESSAGE = "message",
    TIMEOUT = "timeout",
    UNTIMEOUT = "untimeout",
    BAN = "ban",
    UNBAN = "unban",
}
export interface IUserBansMessage {
    banIssuer: string;
    banIssuerID: string;
    duration: number;
    date: string;
    reason: string;
    type: string;
    user: string;
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
