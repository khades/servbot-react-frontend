import actiontypes from "./actiontypes";
import States from "../utils/states";
import reducer from "./reducer";

describe("ChannelName reducer", () => {
    it("Should properly accept LOADING event", () => {
        expect(reducer({},
            {
                type: actiontypes.LOADING,
            })).toEqual({
                state: States.LOADING,
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
                channelName: "2",
                channelNameID: "1",
                state: States.READY,
            });
    });
    it("Should properly upgrade state from LOADING event to READY", () => {
        let reducerState = reducer({},
            {
                type: actiontypes.LOADING,
            });
        expect(reducerState).toEqual({
            state: States.LOADING,
        });
        reducerState = reducer(reducerState, {
            payload: {
                channelName: "2",
                channelNameID: "1",
            },
            type: actiontypes.READY,
        });
        expect(reducerState).toEqual({
            channelName: "2",
            channelNameID: "1",
            state: States.READY,
        });
    });
    it("Should properly upgrade state from LOADING event to NOTAUTHORIZED", () => {
        let reducerState = reducer({},
            {
                type: actiontypes.LOADING,
            });
        expect(reducerState).toEqual({
            state: States.LOADING,
        });
        reducerState = reducer(reducerState, {
            type: actiontypes.NOTAUTHORIZED,
        });
        expect(reducerState).toEqual({
            state: States.NOTAUTHORIZED,
        });

    });
});
