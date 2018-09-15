import { fetchMock } from "fetch-mock";
import { call, put, select } from "redux-saga/effects";
import API from "../api";
import { getChannelName } from "./saga";

describe("ChannelName sagas", () => {
    it("Should do proper steps if store is empty", () => {
        fetchMock.get("*", { channel: "world" });

        const saga = getChannelName({ payload: { channelNameID: "1" } });
        expect(saga.next().value).toEqual(select());
        expect(saga.next({}).value).toEqual(put({
            payload: {
                channelNameID: "1",
            },
            type: "CHANNELNAME/LOADING",
        }));
        expect(saga.next().value).toEqual(call(API.getChannelName, "1"));
        expect(saga.next().value).toEqual(put({
            payload: {
                channelName: "world",
                channelNameID: "1",
            },
            type: "CHANNELNAME/READY",
        }));
        expect(saga.next().done).toBe(true);
    });
    it("Should do proper steps if store is not empty", () => {
        const saga = getChannelName({ payload: { channelNameID: "1" } });
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ 1: { value: "something" } }).done).toBe(true);
    });
});
