import { IAutoMessageWithHistory } from "../api/types";
import States from "../utils/states";
import { actiontypes, AutoMessageAction } from "./actions";

export interface IAutoMessageState {
    channelID: string;
    id: string;
    isNew: boolean;
    state: States;
    content?: IAutoMessageWithHistory;
}

const initialState: IAutoMessageState = {
    channelID: "",
    id: "",
    isNew: false,
    state: States.NOTINITIATED,
};

const reducer = (state: IAutoMessageState = initialState, action: AutoMessageAction): IAutoMessageState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                id: action.payload.id,
                state: States.LOADING,
            });
        case actiontypes.CREATENEW:
            return {
                channelID: action.payload.channelID,
                id: "",
                isNew: true,
                state: States.READY,
            };
        case actiontypes.READY:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                content: action.payload.content,
                id: action.payload.id,
                isNew: false,
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
        case actiontypes.SAVE:
            return Object.assign({}, state, {
                state: States.UPDATING,
            });
        default:
            return state;
    }
};

export default reducer;
