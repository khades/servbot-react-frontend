import { call, put } from "redux-saga/effects";
import States from "../utils/states";
import * as actions from "./actioncreators";
import * as API from "./api";
import { getUserLogs } from "./saga";
import { IUserLogsInfo } from "./types";

describe("UserLogs sagas", () => {
    it("Should properly get data from server", () => {
        const date = new Date();
        const userInfo: IUserLogsInfo = {
            lastUpdate: new Date().getTime(),
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
        expect(saga.throw({ state: States.NOTAUTHORIZED }).value).toEqual(put(actions.notAuthorized("test", "aaa")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if not found", () => {
        const saga = getUserLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUserLogs, "test", "aaa"));
        expect(saga.throw({ state: States.NOTFOUND }).value).toEqual(put(actions.notFound("test", "aaa")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper reject steps if forbidden", () => {
        const saga = getUserLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUserLogs, "test", "aaa"));
        expect(saga.throw({ state: States.FORBIDDEN }).value).toEqual(put(actions.forbidden("test", "aaa")));
        expect(saga.next().done).toBe(true);
    });
});
