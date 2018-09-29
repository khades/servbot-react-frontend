import States from "../utils/states";
import * as actions from "./actioncreators";
import reducer, { IChannelUsersState } from "./reducer";

describe("ChannelUsers reducer", () => {
    it("Should properly accept LOADING event", () => {
        const initialState: IChannelUsersState = {
            channelID: "",
            state: States.NOTINITIATED,
            userName: "",
            users: [],
        };

        expect(reducer(initialState, actions.loading("234", "457"))).toEqual({
            channelID: "234",
            state: States.LOADING,
            userName: "457",
            users: [],
        });
    });

    it("Should properly accept LOADING event with one parameter", () => {
        const initialState: IChannelUsersState = {
            channelID: "",
            state: States.NOTINITIATED,
            userName: "",
            users: [],
        };

        expect(reducer(initialState, actions.loading("234"))).toEqual({
            channelID: "234",
            state: States.LOADING,
            users: [],
        });
    });

    it("Should properly accept READY event", () => {
        const initialState: IChannelUsersState = {
            channelID: "123",
            state: States.LOADING,
            userName: "345",
            users: [],
        };
        const date = new Date();
        expect(reducer(initialState,
            actions.ready([{
                lastUpdate: date,
                user: "345",
                userID: "3456",
            },
            {
                lastUpdate: date,
                user: "3456",
                userID: "34567",
            }]))).toEqual({
                channelID: "123",
                state: States.READY,
                userName: "345",
                users: [{
                    lastUpdate: date,
                    user: "345",
                    userID: "3456",
                },
                {
                    lastUpdate: date,
                    user: "3456",
                    userID: "34567",
                }],
            });
    });

    it("Should properly upgrade state from NOTINITIATED event to READY", () => {
        const initialState: IChannelUsersState = {
            channelID: "",
            state: States.NOTINITIATED,
            userName: "",
            users: [],
        };
        let reducerState = reducer(initialState, actions.loading("234", "457"));
        const date = new Date();

        expect(reducerState).toEqual({
            channelID: "234",
            state: States.LOADING,
            userName: "457",
            users: [],
        });

        expect(reducerState.state).toEqual(States.LOADING);

        reducerState = reducer(reducerState,
            actions.ready([{
                lastUpdate: date,
                user: "345",
                userID: "3456",
            },
            {
                lastUpdate: date,
                user: "3456",
                userID: "34567",
            }]));

        expect(reducerState).toEqual({
            channelID: "234",
            state: States.READY,
            userName: "457",
            users: [{
                lastUpdate: date,
                user: "345",
                userID: "3456",
            },
            {
                lastUpdate: date,
                user: "3456",
                userID: "34567",
            }],
        });
    });

    it("Should properly upgrade state from LOADING event to NOTAUTHORIZED", () => {
        const initialState: IChannelUsersState = {
            channelID: "",
            state: States.NOTINITIATED,
            userName: "",
            users: [],
        };

        let reducerState = reducer(initialState, actions.loading("234", "457"));

        expect(reducerState).toEqual({
            channelID: "234",
            state: States.LOADING,
            userName: "457",
            users: [],
        });

        reducerState = reducer(reducerState, actions.notAuthorized());

        expect(reducerState).toEqual({
            channelID: "234",
            state: States.NOTAUTHORIZED,
            userName: "457",
            users: [],
        });
    });
    it("Should set state as UPDATING if channel matches", () => {
        const initialState: IChannelUsersState = {
            channelID: "123",
            state: States.READY,
            userName: "345",
            users: [],
        };
        const date = new Date();
        expect(reducer(initialState,
            actions.loading("123", "346"))).toEqual({
                channelID: "123",
                state: States.UPDATING,
                userName: "346",
                users: [],
            });
    });
});
