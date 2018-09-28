import States from "../utils/states";
import * as actions from "./actioncreators";
import reducer from "./reducer";

describe("UsersLogs reducer", () => {
    it("Should properly accept LOADING event", () => {
        const initialState = {
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
        const initialState = {
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
        const initialState = {
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
        const initialState = {
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
        const initialState = {
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
});
