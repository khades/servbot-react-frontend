import { IBan } from "../api/types";
import States from "../utils/states";
import { actiontypes, BansAction } from "./actions";

export interface IBansState {
    bans?: IBan[];
    state: States;
    channelID: string;
}

const initialState = {
    channelID: "",
    state: States.NOTINITIATED,
};

const reducer = (state: IBansState = initialState, action: BansAction): IBansState => {
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
        case actiontypes.OFFLINE:
            return Object.assign({}, action.payload, { state: States.OFFLINE });
        default:
            return state;
    }
};

export default reducer;
