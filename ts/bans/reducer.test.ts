import States from "../utils/states";
import * as actions from "./actioncreators";
import reducer from "./reducer";
import { IBan } from "./types";

describe("Bans reducer", () => {
    const initialState = {
        channelID: "",
        state: States.NOTINITIATED,
    };
    it("Should properly accept LOADING event", () => {
        expect(reducer(
            initialState, actions.loading("2"))).toEqual({
                channelID: "2",
                state: States.LOADING,
            });
    });
    it("Should properly accept FORBIDDEN event", () => {
        expect(reducer(
            initialState, actions.forbidden("2"))).toEqual({
                channelID: "2",
                state: States.FORBIDDEN,
            });
    });
    it("Should properly accept NOTAUTHORIZED event", () => {
        expect(reducer(
            initialState, actions.notAuthorized("2"))).toEqual({
                channelID: "2",
                state: States.NOTAUTHORIZED,
            });
    });

    it("Should properly accept NOTFOUND event", () => {
        expect(reducer(
            initialState, actions.notFound("2"))).toEqual({
                channelID: "2",
                state: States.NOTFOUND,
            });
    });

    it("Should properly accept READY event", () => {
        const bans: IBan[] = [{
            banLength: 300,
            date: new Date().getTime(),
            user: "a",
            userID: "b",
        }, {
            banLength: 308,
            date: new Date().getTime(),
            user: "3",
            userID: "b6",
        }];
        expect(reducer(
            initialState, actions.ready("2", bans))).toEqual({
                bans,
                channelID: "2",
                state: States.READY,
            });
    });
});
