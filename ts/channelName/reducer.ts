import actiontypes from "./actiontypes";
import States from "../utils/states";

const reducer = (state = {}, action: any) => {
    switch (action.type) {
        case actiontypes.READY:
            return {
                ...state, ...{
                    [action.payload.channelNameID]: {
                        name: action.payload.channelName,
                        state: States.READY,
                    },
                },
            };
        case actiontypes.NOTFOUND:
            return {
                ...state, ...{
                    [action.payload.channelNameID]: {
                        state: States.NOTFOUND,
                    },
                },
            };
        case actiontypes.LOADING:
            return {
                ...state, ...{
                    [action.payload.channelNameID]:
                        { state: States.LOADING },
                },
            };
        default:
            return state;
    }
};

export default reducer;
