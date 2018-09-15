import States from "../utils/states";

export const reducer = (state = {}, action: any) => {
    switch (action.type) {
        case "CHANNELNAME/READY":
            return {
                ...state, ...{
                    [action.payload.channelNameID]: {
                        name: action.payload.channelName,
                        state: States.READY,
                    },
                },
            };
        case "CHANNELNAME/NOTFOUND":
            return {
                ...state, ...{
                    [action.payload.channelNameID]: {
                        state: States.NOTFOUND,
                    },
                },
            };
        case "CHANNELNAME/LOADING":
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
