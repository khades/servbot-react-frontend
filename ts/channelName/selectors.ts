import States from "../utils/states";
import { IChannelName, IChannelNameState } from "./reducer";

export const getChannelName = (state: IChannelNameState, channelID: string): IChannelName => {
    if (state[channelID]) {
        return state[channelID];
    } else {
        return {
            state: States.NOTINITIATED,
        };
    }

};
