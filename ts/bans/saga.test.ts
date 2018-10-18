import { call, put } from "redux-saga/effects";
import API from "../api/api";
import { IBan } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { getBans } from "./saga";

describe("Bans sagas", () => {
    it("Should properly get data from server", () => {
        const bans: IBan[] = [{
            banLength: 300,
            date: new Date(),
            user: "a",
            userID: "b",
        }, {
            banLength: 308,
            date: new Date(),
            user: "3",
            userID: "b6",
        }];
        const saga = getBans(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getBans, "test"));
        expect(saga.next(bans).value).toEqual(put(actions.ready("test", bans)));
        expect(saga.next().done).toBe(true);

    });
    it("Should do proper reject steps if not authrorized", () => {
        const saga = getBans(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getBans, "test"));
        expect(saga.throw({ state: States.NOTAUTHORIZED }).value).toEqual(put(actions.notAuthorized("test")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if not found", () => {
        const saga = getBans(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getBans, "test"));
        expect(saga.throw({ state: States.NOTFOUND }).value).toEqual(put(actions.notFound("test")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if forbidden", () => {
        const saga = getBans(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getBans, "test"));
        expect(saga.throw({ state: States.FORBIDDEN }).value).toEqual(put(actions.forbidden("test")));
        expect(saga.next().done).toBe(true);
    });
});
