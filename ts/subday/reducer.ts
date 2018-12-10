import States from "../utils/states";
import { actiontypes, SubDayAction } from "./actions";
import { ISubDayFull } from "./types";

export interface ISubDayState {
    channelID: string;
    state: States;
    content?: ISubDayFull;
    id: string;
}

const initialState: ISubDayState = {
    channelID: "",
    id: "",
    state: States.NOTINITIATED,
};

const reducer = (state: ISubDayState = initialState, action: SubDayAction): ISubDayState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                id: action.payload.id,
                state: States.LOADING,
            });
        case actiontypes.READY:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                content: action.payload.content,
                id: action.payload.id,
                state: States.READY,
            });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                id: action.payload.id,
                state: States.NOTAUTHORIZED,
            });
        case actiontypes.NOTFOUND:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                id: action.payload.id,
                state: States.NOTFOUND,
            });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                id: action.payload.id,
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
