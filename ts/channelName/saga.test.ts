import { call, put, select } from "redux-saga/effects";
import API from "../api/api";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { getChannelName } from "./saga";

describe("ChannelName sagas", () => {

    it("Should do proper steps if store is empty", () => {
        const saga = getChannelName(actions.get("1"));
        expect(saga.next().value).toEqual(select());
        expect(saga.next({}).value).toEqual(put(actions.loading("1")));
        expect(saga.next().value).toEqual(call(API.getChannelName, "1"));
        expect(saga.next("world").value).toEqual(put(actions.ready("1", "world")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper steps if store is empty with error", () => {
        const saga = getChannelName(actions.get("1"));
        expect(saga.next().value).toEqual(select());
        expect(saga.next({}).value).toEqual(put(actions.loading("1")));
        expect(saga.next().value).toEqual(call(API.getChannelName, "1"));
        expect(saga.throw("Testing Error").value).toEqual(put(actions.notFound("1")));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper steps if store is not empty", () => {
        const saga = getChannelName(actions.get("1"));
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ 1: { state: States.READY, value: "something" } }).done).toBe(true);
    });

    it("Should do proper steps if store is not empty, but element is not found yet", () => {
        const saga = getChannelName(actions.get("1"));
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ 1: { state: States.NOTFOUND } }).done).toBe(true);

        // expect(saga.next({ 1: { state: States.NOTFOUND } }).value).toEqual(put(actions.loading("1")));
        // expect(saga.next().value).toEqual(call(API.getChannelName, "1"));
        // expect(saga.next("world").value).toEqual(put(actions.ready("1", "world")));
        // expect(saga.next().done).toBe(true);
    });
});
