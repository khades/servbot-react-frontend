import { call, put, select } from "redux-saga/effects";
import API from "../api/api";
import { IUserInfo } from "../api/types";
import States from "../utils/states";
import * as actions from "./actioncreators";
import { getUserInfo } from "./saga";

describe("ChannelName sagas", () => {

    it("Should do proper steps if store is empty", () => {
        const saga = getUserInfo(actions.get());
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ state: States.NOTINITIATED }).value).toEqual(put(actions.loading()));
        expect(saga.next().value).toEqual(call(API.getUserInfo));

        const payload: IUserInfo = {
            avatarUrl: "s",
            modChannels: [],
            userID: "3",
            username: "2",
        };

        expect(saga.next(payload).value).toEqual(put(actions.ready(payload)));
        expect(saga.next().done).toBe(true);
    });

    it("Should do proper steps if store is not empty", () => {
        const saga = getUserInfo(actions.get());

        expect(saga.next().value).toEqual(select());
        expect(saga.next({ state: States.READY }).done).toBe(true);
    });

    it("Should do proper steps if store is empty but in process of loading", () => {
        const saga = getUserInfo(actions.get());

        expect(saga.next().value).toEqual(select());
        expect(saga.next({ state: States.LOADING }).done).toBe(true);
    });

    it("Should do proper steps if store is empty with rejections", () => {
        const saga = getUserInfo(actions.get());

        expect(saga.next().value).toEqual(select());
        expect(saga.next({ state: States.NOTAUTHORIZED }).done).toBe(true);
    });

    it("Should do proper reject steps if any api problems", () => {
        const saga = getUserInfo(actions.get());
        expect(saga.next().value).toEqual(select());
        expect(saga.next({ state: States.NOTINITIATED }).value).toEqual(put(actions.loading()));
        expect(saga.next().value).toEqual(call(API.getUserInfo));
        expect(saga.throw("Testing Error").value).toEqual(put(actions.notAuthorized()));
        expect(saga.next().done).toBe(true);
    });
});
