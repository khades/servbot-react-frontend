import States from "../utils/states";
import { actiontypes, AutoMessageAction } from "./actions";
import { IAutoMessageWithHistory } from "./types";

export interface IAutoMessageState {
    channelID: string;
    id: string;
    isNew: boolean;
    state: States;
    validationError: boolean;
    content?: IAutoMessageWithHistory;
}

const initialState: IAutoMessageState = {
    channelID: "",
    id: "",
    isNew: false,
    state: States.NOTINITIATED,
    validationError: false,
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
                content: {
                    channelID: action.payload.channelID,
                    durationLimit: 300000000000,
                    durationThreshold: 0,
                    game: "",
                    history: [],
                    id: "",
                    message: "",
                    messageLimit: 50,
                    messageThreshold: 0,
                },
                id: "",
                isNew: true,
                state: States.READY,
                validationError: false,
            };
        case actiontypes.READY:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                content: action.payload.content,
                id: action.payload.id,
                isNew: false,
                state: States.READY,
                validationError: false,
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
        case actiontypes.SAVENEW:
            return Object.assign({}, state, {
                state: States.UPDATING,
            });
        case actiontypes.ONSAVEERROR:
            return Object.assign({}, state, {
                state: States.READY,
                validationError: true,
            });
        case actiontypes.RESET:
            return initialState;
        case actiontypes.AFTERCREATION:
            return Object.assign({}, state, { id: action.payload.id });
        default:
            return state;
    }
};

export default reducer;
