import { IUserLogsInfo } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import reducer from "./reducer";

describe("UserLogs reducer", () => {
    const initialState = {
        channelID: "",
        state: States.NOTINITIATED,
        userID: "",
    };
    it("Should properly accept LOADING event", () => {
        expect(reducer(
            initialState, actions.loading("2", "3"))).toEqual({
                channelID: "2",
                state: States.LOADING,
                userID: "3",
            });
    });
    it("Should properly accept FORBIDDEN event", () => {
        expect(reducer(
            initialState, actions.forbidden("2", "3"))).toEqual({
                channelID: "2",
                state: States.FORBIDDEN,
                userID: "3",
            });
    });
    it("Should properly accept NOTAUTHORIZED event", () => {
        expect(reducer(
            initialState, actions.notAuthorized("2", "3"))).toEqual({
                channelID: "2",
                state: States.NOTAUTHORIZED,
                userID: "3",
            });
    });

    it("Should properly accept NOTFOUND event", () => {
        expect(reducer(
            initialState, actions.notFound("2", "3"))).toEqual({
                channelID: "2",
                state: States.NOTFOUND,
                userID: "3",
            });
    });

    it("Should properly accept READY event", () => {
        const userInfo: IUserLogsInfo = {
            lastUpdate: new Date(),
            user: "2",
            userID: "4",
        };
        expect(reducer(
            initialState, actions.ready("2", "3", userInfo))).toEqual({
                channelID: "2",
                content: userInfo,
                state: States.READY,
                userID: "3",
            });
    });
});
