import { IUserLogsInfo } from "../userLogs/types";
import States from "../utils/states";
import { actiontypes, ChannelUsersAction } from "./actions";

export interface IChannelUsersState {
    channelID: string;
    userName: string;
    users: IUserLogsInfo[];
    state: States;
}

const initialState: IChannelUsersState = {
    channelID: "",
    state: States.NOTINITIATED,
    userName: "",
    users: [],
};

const reducer = (state: IChannelUsersState = initialState, action: ChannelUsersAction) => {

    switch (action.type) {
        case actiontypes.READY:
            return Object.assign({}, state, {
                state: States.READY,
                users: action.payload,
            });
        case actiontypes.OFFLINE:
            return Object.assign({}, state, { state: States.OFFLINE });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.FORBIDDEN,
            });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, { state: States.NOTAUTHORIZED });
        case actiontypes.LOADING:
            if (state.channelID === action.payload.channelID) {
                return Object.assign({}, state, {
                    channelID: action.payload.channelID,
                    state: States.UPDATING,
                    userName: action.payload.userName,
                });
            } else {
                return {
                    channelID: action.payload.channelID,
                    state: States.LOADING,
                    userName: action.payload.userName,
                    users: [],
                };
            }
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
