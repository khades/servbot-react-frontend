import States from "../utils/states";
import { actiontypes, ChannelNameAction } from "./actions";

export interface IChannelName {
    name?: string;
    state: States;
}
export interface IChannelNameState {
    [key: string]: IChannelName;
}

const reducer = (state: IChannelNameState = {}, action: ChannelNameAction): IChannelNameState => {
    switch (action.type) {
        case actiontypes.READY:
            return Object.assign({}, state, {
                [action.payload.channelNameID]: {
                    name: action.payload.channelName,
                    state: States.READY,
                },
            });
        case actiontypes.NOTFOUND:
            return Object.assign({}, state, {
                [action.payload.channelNameID]: {
                    state: States.NOTFOUND,
                },
            });
        case actiontypes.LOADING:
            return Object.assign({}, state, {
                [action.payload.channelNameID]: {
                    state: States.LOADING,
                },
            });
        default:
            return state;
    }
};

export default reducer;
