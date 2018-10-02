import { call, put } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { getChannelUsers } from "./saga";

describe("ChannelUsers sagas", () => {
    it("Should properly get data from server", () => {
        const date = new Date();
        const saga = getChannelUsers(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getChannelUsers, "test", "aaa"));
        expect(saga.next([{
            lastUpdate: date,
            user: "345",
            userID: "3456",
        },
        {
            lastUpdate: date,
            user: "3456",
            userID: "34567",
        }]).value).toEqual(put(actions.ready([{
            lastUpdate: date,
            user: "345",
            userID: "3456",
        },
        {
            lastUpdate: date,
            user: "3456",
            userID: "34567",
        }])));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if any api problems", () => {
        const saga = getChannelUsers(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getChannelUsers, "test", undefined));
        expect(saga.throw("Testing Error").value).toEqual(put(actions.offline()));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if forbidden", () => {
        const saga = getChannelUsers(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getChannelUsers, "test", undefined));
        expect(saga.throw(States.FORBIDDEN).value).toEqual(put(actions.forbidden("test")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if not authorized", () => {
        const saga = getChannelUsers(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getChannelUsers, "test", undefined));
        expect(saga.throw(States.NOTAUTHORIZED).value).toEqual(put(actions.notAuthorized()));
        expect(saga.next().done).toBe(true);
    });
});
