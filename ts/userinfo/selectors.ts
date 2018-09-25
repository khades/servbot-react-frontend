import { IUserInfoState } from "./reducer";

export const getIfUserIsModerator = (userInfo: IUserInfoState): boolean =>
    userInfo.modChannels.some((channelInfo): boolean => channelInfo.channelID === userInfo.currentChannel);
