import { IUserInfoState } from "../userinfo/reducer";

export const getIfUserIsModerator = (userInfo: IUserInfoState, currentChannel: string): boolean =>
    userInfo.modChannels.some((channelInfo): boolean => channelInfo.channelID === currentChannel);
