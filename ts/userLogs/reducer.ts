import { IUserLogsInfo } from "../api/types";
import States from "../utils/states";
import { actiontypes, UserLogsAction } from "./actions";

export interface IUserLogsState {
    content?: IUserLogsInfo;
    state: States;
    userID: string;
    channelID: string;
}

const initialState = {
    channelID: "",
    state: States.NOTINITIATED,
    userID: "",
};

const reducer = (state: IUserLogsState = initialState, action: UserLogsAction): IUserLogsState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return Object.assign({}, action.payload, { state: States.LOADING });
        case actiontypes.READY:
            return Object.assign({}, action.payload, { state: States.READY });
        case actiontypes.NOTFOUND:
            return Object.assign({}, action.payload, { state: States.NOTFOUND });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, action.payload, { state: States.FORBIDDEN });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, action.payload, { state: States.NOTAUTHORIZED });
        default:
            return state;
    }
};

export default reducer;
