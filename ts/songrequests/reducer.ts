import States from "../utils/states";
import { actiontypes, SongRequestsAction } from "./actions";
import { ISongRequest, ISongRequests } from "./types";

export enum songRequestsPanels {
    BANNEDTRACKS,
    SETTINGS,
    PLAYLIST,
}

export interface ISongRequestsState {
    channelID: string;
    state: States;
    content?: ISongRequests;
    currentTrack?: ISongRequest;
    shownPanel: songRequestsPanels;

}

const initialState: ISongRequestsState = {
    channelID: "",
    shownPanel: songRequestsPanels.PLAYLIST,
    state: States.NOTINITIATED,
};

const reducer = (state: ISongRequestsState = initialState, action: SongRequestsAction): ISongRequestsState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return {
                channelID: action.payload.channelID,
                shownPanel: songRequestsPanels.PLAYLIST,
                state: States.LOADING,
            };
        case actiontypes.READY:
            const requests = !!action.payload.content.requests ?
                action.payload.content.requests.sort((a, b) => a.order - b.order)
                : [];
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
        case actiontypes.GOTOBANNEDTRACKS: {
            return Object.assign({}, state, {
                shownPanel: songRequestsPanels.BANNEDTRACKS,
            });
        }
        case actiontypes.GOTOSETTINGS: {
            return Object.assign({}, state, {
                shownPanel: songRequestsPanels.SETTINGS,
            });
        }
        case actiontypes.GOTOPLAYLIST: {
            return Object.assign({}, state, {
                shownPanel: songRequestsPanels.PLAYLIST,
            });
        }
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
