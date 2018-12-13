import { ISubDay } from "../subday/types";
import States from "../utils/states";
import { actiontypes, SubDaysAction } from "./actions";

export interface ISubDaysState {
    channelID: string;
    state: States;
    content?: ISubDay[];
    showCreationPanel: boolean;
}

const initialState: ISubDaysState = {
    channelID: "",
    showCreationPanel: false,
    state: States.NOTINITIATED,
};

const reducer = (state: ISubDaysState = initialState, action: SubDaysAction): ISubDaysState => {
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
                showCreationPanel: false,
                state: States.READY,
            });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                state: States.NOTAUTHORIZED,
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
        case actiontypes.CREATE:
            return Object.assign({}, state, {
                state: States.UPDATING,
            });
        case actiontypes.ONSAVEERROR:
            return Object.assign({}, state, {
                state: States.READY,
            });
        case actiontypes.SHOWCREATIONPANEL:
            return Object.assign({}, state, {
                showCreationPanel: true,
            });
        case actiontypes.HIDECREATIONPANEL:
            return Object.assign({}, state, {
                showCreationPanel: false,
            });
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
