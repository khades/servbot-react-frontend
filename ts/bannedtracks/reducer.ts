import States from "../utils/states";
import { actiontypes, BannedTracksAction } from "./actions";
import { IBannedTracks } from "./types";

export interface IBannedTracksState {
    state: States;
    page: number;
    content?: IBannedTracks;
}

const initialState: IBannedTracksState = {
    page: 1,
    state: States.NOTINITIATED,
};

const reducer = (state: IBannedTracksState = initialState, action: BannedTracksAction): IBannedTracksState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return {
                page: 1,
                state: States.LOADING,
            };
        case actiontypes.READY:
            return Object.assign({}, state, {
                content: action.payload.content,
                page: action.payload.page,
                state: States.READY,
            });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, {
                state: States.NOTAUTHORIZED,
            });
        case actiontypes.NOTFOUND:
            return Object.assign({}, state, {
                state: States.NOTFOUND,
            });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, state, {
                state: States.FORBIDDEN,
            });
        case actiontypes.OFFLINE:
            return Object.assign({}, state, {
                state: States.OFFLINE,
            });
        case actiontypes.UNBAN:
            return Object.assign({}, state, {
                state: States.UPDATING,
            });
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
