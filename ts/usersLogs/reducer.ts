import { IUserLogsInfo } from "../api/types";
import States from "../utils/states";
import { actiontypes, UsersLogsAction } from "./actions";

export interface IUsersLogsState {
    channelID: string;
    userName: string;
    users: IUserLogsInfo[];
    state: States;
}

const initialState = {
    channelID: "",
    state: States.NOTINITIATED,
    userName: "",
    users: [],
};

const reducer = (state: IUsersLogsState = initialState, action: UsersLogsAction) => {

    switch (action.type) {
        case actiontypes.READY:
            return Object.assign({}, state, {
                state: States.READY,
                users: action.payload,
            });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, { state: States.NOTAUTHORIZED });
        case actiontypes.LOADING:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.LOADING,
                userName: action.payload.userName,
            });
        case actiontypes.GET:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                userName: action.payload.userName,
            });
        default:
            return state;
    }
};

export default reducer;
