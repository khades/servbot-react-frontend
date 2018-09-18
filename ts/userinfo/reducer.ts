import { IUserInfo } from "../api/types";
import States from "../utils/states";
import UserInfoAction, { actiontypes } from "./actions";

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
            return { ...action.payload, ...{ state: States.READY } };
        case actiontypes.NOTAUTHORIZED:
            return { ...state, ...{ state: States.NOTAUTHORIZED } };
        case actiontypes.LOADING:
            return { ...state, ...{ state: States.LOADING } };
        default:
            return state;
    }
};

export default reducer;
