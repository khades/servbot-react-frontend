import States from "../utils/states";
import { actiontypes, DonationSourcesAction } from "./actions";
import { IDonationSources } from "./types";

export interface IDonationSourcesState {
    channelID: string;
    state: States;
    content?: IDonationSources;
}

const initialState: IDonationSourcesState = {
    channelID: "",
    state: States.NOTINITIATED,
};

const reducer = (state: IDonationSourcesState = initialState, action: DonationSourcesAction): IDonationSourcesState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.LOADING,
            });
        case actiontypes.READY:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                content: action.payload.content,
                state: States.READY,
            });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.NOTAUTHORIZED,
            });
        case actiontypes.NOTFOUND:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.NOTFOUND,
            });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.FORBIDDEN,
            });
        case actiontypes.OFFLINE:
            return Object.assign({}, state, {
                state: States.OFFLINE,
            });
        default:
            return state;
    }
};

export default reducer;
