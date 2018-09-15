import { call, put, select } from "redux-saga/effects";

import { getChannelName } from "./saga";

test("Getting channelName while store is empty", () => {
    const saga = getChannelName({ payload: { channelNameID: "1" } });
    console.log(saga.next({}).value);
    console.log(saga.next({}).value);
    console.log(saga.next().value);
    console.log(saga.next().value);
    console.log(saga.next().value);
    console.log(saga.next().value);
});

test("Getting channelName while store is not empty", () => {
    const saga = getChannelName({ payload: { channelNameID: "1" } });
    console.log(saga.next().value);
    console.log(saga.next({ 1: { value: "something" } }));
    console.log(saga.next().value);
});
