import { IUserInfoState } from "./reducer";

export const getIfUserIsModerator = (userInfo: IUserInfoState): boolean =>
    userInfo.modChannels.some((channelInfo) => channelInfo.channelNameID === userInfo.currentChannel);
