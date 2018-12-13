import States from "../utils/states";
import { actiontypes, ExternalServicesAction } from "./actions";
import { IChannelExternalServices } from "./types";

export interface IExternalServicesState {
    channelID: string;
    state: States;
    content?: IChannelExternalServices;

}

const initialState: IExternalServicesState = {
    channelID: "",
    state: States.NOTINITIATED,
};

const reducer = (
    state: IExternalServicesState = initialState,
    action: ExternalServicesAction): IExternalServicesState => {
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
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
