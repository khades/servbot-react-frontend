import { ISubTrain } from "../api/types";
import States from "../utils/states";
import { actiontypes, SubTrainAction } from "./actions";

export interface ISubTrainState {
    channelID: string;
    state: States;
    content?: ISubTrain;
}

const initialState: ISubTrainState = {
    channelID: "",
    state: States.NOTINITIATED,
};

const reducer = (state: ISubTrainState = initialState, action: SubTrainAction): ISubTrainState => {
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
        default:
            return state;
    }
};

export default reducer;
