import { call, put, select } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import actiontypes from "./actiontypes";
import { getUserInfo } from "./saga";

describe("ChannelName sagas", () => {

    it("Should do proper steps if store is empty", () => {
        const saga = getUserInfo();
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ type: States.LOADING }).value).toEqual(put({
            type: actiontypes.LOADING,
        }));
        expect(saga.next().value).toEqual(call(API.getUserInfo));
        expect(saga.next("world").value).toEqual(put({
            payload: "world",
            type: actiontypes.READY,
        }));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper steps if store is not empty", () => {
        const saga = getUserInfo();
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ state: States.READY }).done).toBe(true);
    });

    it("Should do proper steps if store is empty with error", () => {
        const saga = getUserInfo();
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ type: States.LOADING }).value).toEqual(put({
            type: actiontypes.LOADING,
        }));
        expect(saga.next().value).toEqual(call(API.getUserInfo));
        expect(saga.throw("Testing Error").value).toEqual(put({
            type: actiontypes.NOTAUTHORIZED,
        }));
        expect(saga.next().done).toBe(true);
    });
});
