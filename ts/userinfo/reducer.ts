import { IUserInfo } from "../api/types";
import States from "../utils/states";
import { actiontypes, UserInfoAction } from "./actions";

export interface IUserInfoState extends IUserInfo {
    currentChannel: string;
    state: States;
}

const initialState: IUserInfoState = {
    avatarUrl: "",
    currentChannel: "",
    modChannels: [],
    state: States.NOTINITIATED,
    userID: "",
    username: "",
};

const reducer = (state: IUserInfoState = initialState, action: UserInfoAction) => {
    switch (action.type) {
        case actiontypes.READY:
            return Object.assign({}, state, action.payload, { state: States.READY });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, { state: States.NOTAUTHORIZED });
        case actiontypes.LOADING:
            return Object.assign({}, state, { state: States.LOADING });
        case actiontypes.SETCHANNEL:
            return Object.assign({}, state, { currentChannel: action.payload });
        default:
            return state;
    }
};

export default reducer;
