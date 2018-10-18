import { ISubAlertsWithHistory } from "../api/types";
import States from "../utils/states";
import { actiontypes, SubAlertsAction } from "./actions";
import { isExtended } from "./utils";

export interface ISubAlertsState {
    content?: ISubAlertsWithHistory;
    state: States;
    channelID: string;
    isExtended: boolean;
}

const initialState = {
    channelID: "",
    isExtended: false,
    state: States.NOTINITIATED,
};

const reducer = (state: ISubAlertsState = initialState, action: SubAlertsAction): ISubAlertsState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return {
                channelID: action.payload.channelID,
                isExtended: false,
                state: States.LOADING,
            };
        case actiontypes.READY:
            return {
                channelID: action.payload.channelID,
                content: action.payload.content,
                isExtended: isExtended(action.payload.content),
                state: States.READY,
            };
        case actiontypes.FORBIDDEN:
            return {
                channelID: action.payload.channelID,
                isExtended: false,
                state: States.FORBIDDEN,
            };
        case actiontypes.SAVE:
            return Object.assign({}, state, {

                state: States.UPDATING,
            });
        case actiontypes.OFFLINE:
            return {
                channelID: "",
                isExtended: false,
                state: States.OFFLINE,
            };
        case actiontypes.NOTAUTHORIZED:
            return {
                channelID: action.payload.channelID,
                isExtended: false,
                state: States.NOTAUTHORIZED,
            };
        case actiontypes.SETEXTENDED:
            return Object.assign({}, state, { isExtended: true });
        default:
            return state;
    }
};

export default reducer;
