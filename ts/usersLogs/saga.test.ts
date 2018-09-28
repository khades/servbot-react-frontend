import { call, put, select } from "redux-saga/effects";
import API from "../api/api";
import { IUserInfo } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { getUsersLogs } from "./saga";

describe("Username sagas", () => {
    it("Should properly get data from server", () => {
        const date = new Date();

        const saga = getUsersLogs(actions.get("test", "aaa"));
        expect(saga.next().value).toEqual(put(actions.loading("test", "aaa")));
        expect(saga.next().value).toEqual(call(API.getUsersLogs, "test", "aaa"));
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
        const saga = getUsersLogs(actions.get("test"));
        expect(saga.next().value).toEqual(put(actions.loading("test")));
        expect(saga.next().value).toEqual(call(API.getUsersLogs, "test", undefined));
        expect(saga.throw("Testing Error").value).toEqual(put(actions.notAuthorized()));
        expect(saga.next().done).toBe(true);
    });
});
