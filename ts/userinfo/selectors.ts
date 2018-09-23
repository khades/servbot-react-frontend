import { IUserInfoState } from "./reducer";

export const getIfUserIsModerator = (userInfo: IUserInfoState) =>
    userInfo.modChannels.some((channelInfo) => channelInfo.channelNameID === userInfo.currentChannel);
