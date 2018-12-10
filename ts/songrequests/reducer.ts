import States from "../utils/states";
import { actiontypes, SongRequestsAction } from "./actions";
import { ISongRequest, ISongRequests } from "./types";

export interface ISongRequestsState {
    channelID: string;
    state: States;
    content?: ISongRequests;
    currentTrack?: ISongRequest;
}

const initialState: ISongRequestsState = {
    channelID: "",
    state: States.NOTINITIATED,
};

const reducer = (state: ISongRequestsState = initialState, action: SongRequestsAction): ISongRequestsState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return {
                channelID: action.payload.channelID,
                state: States.LOADING,
            };
        case actiontypes.READY:
            const requests = action.payload.content.requests.sort((a, b) => a.order - b.order);
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                content: Object.assign(
                    {},
                    action.payload.content,
                    {
                        requests,
                    },
                ),
                currentTrack: requests[0] || null,
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
        case actiontypes.SAVE:
            return Object.assign({}, state, {
                state: States.UPDATING,
            });
        default:
            return state;
    }
};

export default reducer;
