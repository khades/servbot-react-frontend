import { IUserInfoState } from "../userinfo/reducer";

export const getIfUserIsModerator = (userInfo: IUserInfoState, currentChannel: string): boolean => {
    if (!!userInfo && !!userInfo.modChannels) {
        return userInfo.modChannels.some((channelInfo): boolean => channelInfo.channelID === currentChannel);
    }
    return false;
};
