import States from "../utils/states";
import { actiontypes, UserInfoAction } from "./actions";
import { IUserInfo } from "./types";

export interface IUserInfoState extends IUserInfo {
    state: States;
}

const initialState: IUserInfoState = {
    avatarUrl: "",
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
        default:
            return state;
    }
};

export default reducer;
