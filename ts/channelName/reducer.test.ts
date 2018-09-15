import actiontypes from "./actiontypes";
import States from "../utils/states";
import reducer from "./reducer";

describe("ChannelName reducer", () => {
    it("Should properly accept LOADING event", () => {
        expect(reducer({},
            {
                payload: {
                    channelNameID: "1",
                },
                type: actiontypes.LOADING,
            })).toEqual({
                1: {
                    state: States.LOADING,
                },
            });

    });
    it("Should properly accept READY event", () => {
        expect(reducer({},
            {
                payload: {
                    channelName: "2",
                    channelNameID: "1",
                },
                type: actiontypes.READY,
            })).toEqual({
                1: {
                    name: "2",
                    state: States.READY,
                },
            });

    });
    it("Should properly upgrade state from LOADING event to READY", () => {
        let reducerState = reducer({},
            {
                payload: {
                    channelNameID: "1",
                },
                type: actiontypes.LOADING,
            });
        expect(reducerState).toEqual({
            1: {
                state: States.LOADING,
            },
        });
        reducerState = reducer(reducerState, {
            payload: {
                channelName: "2",
                channelNameID: "1",
            },
            type: actiontypes.READY,
        });
        expect(reducerState).toEqual({
            1: {
                name: "2",
                state: States.READY,
            },
        });
    });
    it("Should properly upgrade state from LOADING event to NOTFOUND", () => {
        let reducerState = reducer({},
            {
                payload: {
                    channelNameID: "1",
                },
                type: actiontypes.LOADING,
            });
        expect(reducerState).toEqual({
            1: {
                state: States.LOADING,
            },
        });
        reducerState = reducer(reducerState, {
            payload: {
                channelNameID: "1",
            },
            type: actiontypes.NOTFOUND,
        });
        expect(reducerState).toEqual({
            1: {
                state: States.NOTFOUND,
            },
        });
    });
});
