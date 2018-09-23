import States from "../utils/states";
import * as actions from "./actioncreators";
import reducer, { IUserInfoState } from "./reducer";

describe("ChannelName reducer", () => {
    it("Should properly accept LOADING event", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };

        expect(reducer(initialState, actions.loading()).state).toEqual(States.LOADING);
    });

    it("Should properly accept READY event", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };

        expect(reducer(initialState,
            actions.ready({
                avatarUrl: "",
                modChannels: [],
                userID: "2",
                username: "1",
            }))).toEqual({
                avatarUrl: "",
                currentChannel: "",
                modChannels: [],
                state: States.READY,
                userID: "2",
                username: "1",
            });
    });

    it("Should properly accept SETCHANNEL event", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };
        let reducerState = reducer(initialState, actions.setChannel("1"));

        expect(reducerState).toEqual({
            avatarUrl: "",
            currentChannel: "1",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        });

        reducerState = reducer(reducerState , actions.setChannel("2"));

        expect(reducerState).toEqual({
            avatarUrl: "",
            currentChannel: "2",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        });
    });

    it("Should properly upgrade state from NOTINITIATED event to READY", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };

        let reducerState = reducer(initialState, actions.loading());

        expect(reducerState.state).toEqual(States.LOADING);

        reducerState = reducer(reducerState, actions.ready({
            avatarUrl: "",
            modChannels: [],
            userID: "2",
            username: "1",
        }));

        expect(reducerState).toEqual({
            avatarUrl: "",
            currentChannel: "",
            modChannels: [],
            state: States.READY,
            userID: "2",
            username: "1",
        });
    });

    it("Should properly upgrade state from LOADING event to NOTAUTHORIZED", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "",
            modChannels: [],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };

        let reducerState = reducer(initialState, actions.loading());
        expect(reducerState.state).toEqual(States.LOADING);
        reducerState = reducer(reducerState, actions.notAuthorized());
        expect(reducerState.state).toEqual(States.NOTAUTHORIZED);
    });
});
