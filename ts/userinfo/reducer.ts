import States from "../utils/states";
import actiontypes from "./actiontypes";

const initialState = {
    avatarUrl: "",
    modChannels: [],
    state: States.LOADING,
    userID: "",
    username: "",
};

const reducer = (state = initialState, action) => {
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
