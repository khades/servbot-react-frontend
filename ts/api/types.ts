export interface IUserInfo {
    avatarUrl: string;
    modChannels: IUserModInfo[];
    userID: string;
    username: string;
}

export interface IUserModInfo {
    channelName: string;
    channelNameID: string;
}
