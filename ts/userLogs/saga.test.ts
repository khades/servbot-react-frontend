import { call, put } from "redux-saga/effects";
import API from "../api/api";
import { IUserLogsInfo } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { getUserLogs } from "./saga";

describe("UserLogs sagas", () => {
    it("Should properly get data from server", () => {
        const date = new Date();
        const userInfo: IUserLogsInfo = {
            lastUpdate: new Date(),
            user: "2",
            userID: "4",
        };
        const saga = getUserLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUserLogs, "test", "aaa"));
        expect(saga.next(userInfo).value).toEqual(put(actions.ready("test", "aaa", userInfo)));
        expect(saga.next().done).toBe(true);

    });
    it("Should do proper reject steps if not authrorized", () => {
        const saga = getUserLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUserLogs, "test", "aaa"));
        expect(saga.throw(States.NOTAUTHORIZED).value).toEqual(put(actions.notAuthorized("test", "aaa")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if not found", () => {
        const saga = getUserLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUserLogs, "test", "aaa"));
        expect(saga.throw(States.NOTFOUND).value).toEqual(put(actions.notFound("test", "aaa")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if forbidden", () => {
        const saga = getUserLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUserLogs, "test", "aaa"));
        expect(saga.throw(States.FORBIDDEN).value).toEqual(put(actions.forbidden("test", "aaa")));
        expect(saga.next().done).toBe(true);
    });
});
