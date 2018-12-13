import States from "../utils/states";
import { actiontypes, SubscriptionsAction } from "./actions";
import { ISubscription } from "./types";

export interface ISubscriptionsState {
    channelID: string;
    state: States;
    content?: ISubscription[];
    bookmarks: IBookmarks;
    limits: ILimits;
}

interface IBookmarks {
    [key: string]: string;
}

interface ILimits {
    [key: string]: number;
}

const initialState: ISubscriptionsState = {
    bookmarks: JSON.parse(localStorage.getItem("subscriptionsBookmarks")) || {},
    channelID: "",
    limits: JSON.parse(localStorage.getItem("subscriptionsLimits")) || {},
    state: States.NOTINITIATED,
};

const reducer = (state: ISubscriptionsState = initialState, action: SubscriptionsAction): ISubscriptionsState => {
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
        case actiontypes.SETBOOKMARK:
            const newBookmarks = Object.assign(
                {},
                state.bookmarks,
                { [action.payload.channelID]: action.payload.bookmark });
            localStorage.setItem("subscriptionsBookmarks", JSON.stringify(newBookmarks));
            return Object.assign({}, state, { bookmarks: newBookmarks });
        case actiontypes.SAVELIMIT:
            const newLimits = Object.assign(
                {},
                state.limits,
                { [action.payload.channelID]: action.payload.limit });
            localStorage.setItem("subscriptionsLimits", JSON.stringify(newLimits));
            return Object.assign({}, state, { limits: newLimits });
        case actiontypes.SETLIMIT:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.UPDATING,
            });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.FORBIDDEN,
            });
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
