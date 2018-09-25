import States from "../utils/states";
import { IChannelName, IChannelNameStore } from "./reducer";

export const getChannelName = (state: IChannelNameStore, channelID: string): IChannelName => {
    if (state[channelID]) {
        return state[channelID];
    } else {
        return {
            state: States.NOTINITIATED,
        };
    }

};
