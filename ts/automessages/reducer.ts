import { IAutoMessageWithHistory } from "../automessage/types";
import States from "../utils/states";
import { actiontypes, AutoMessagesAction } from "./actions";

export interface IAutoMessagesState {
    channelID: string;
    state: States;
    emptyShown: boolean;
    content?: IAutoMessageWithHistory[];
}

const initialState: IAutoMessagesState = {
    channelID: "",
    emptyShown: false,
    state: States.NOTINITIATED,
};

const reducer = (state: IAutoMessagesState = initialState, action: AutoMessagesAction): IAutoMessagesState => {
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
                emptyShown: false,
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
        case actiontypes.SHOWEMPTY:
            return Object.assign({}, state, {
                emptyShown: true,
            });
        case actiontypes.HIDEEMPTY:
            return Object.assign({}, state, {
                emptyShown: false,
            });
        default:
            return state;
    }
};

export default reducer;
