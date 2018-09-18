import States from "../utils/states";
import * as actions from "./actioncreators";
import reducer, { IChannelNameStore } from "./reducer";

describe("ChannelName reducer", () => {
    it("Should properly accept LOADING event", () => {
        expect(reducer({}, actions.loadingChannelName("1"))).toEqual({
            1: {
                state: States.LOADING,
            },
        });

    });
    it("Should properly accept READY event", () => {
        expect(reducer({}, actions.readyChannelName("1", "2"))).toEqual({
            1: {
                name: "2",
                state: States.READY,
            },
        });

    });
    it("Should properly upgrade state from LOADING event to READY", () => {
        let reducerState = reducer({},
            actions.loadingChannelName("1"));
        expect(reducerState).toEqual({
            1: {
                state: States.LOADING,
            },
        });
        reducerState = reducer(reducerState, actions.readyChannelName("1", "2"));
        expect(reducerState).toEqual({
            1: {
                name: "2",
                state: States.READY,
            },
        });
    });
    it("Should properly upgrade state from LOADING event to NOTFOUND", () => {
        let reducerState: IChannelNameStore = reducer({}, actions.loadingChannelName("1"));
        expect(reducerState).toEqual({
            1: {
                state: States.LOADING,
            },
        });
        reducerState = reducer(reducerState, actions.notFoundChannelName("1"));
        expect(reducerState).toEqual({
            1: {
                state: States.NOTFOUND,
            },
        });
    });
});
