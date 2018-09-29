import { fetchMock } from "fetch-mock";
import States from "../utils/states";
import API from "./api";

describe("ChannelName API", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("Should return proper channelname by id", () => {
        fetchMock.get("*", { channel: "world" });
        expect(API.getChannelName("1")).resolves.toBe("world");
    });
    it("Should properly reject if status code is 401", () => {
        fetchMock.get("*", { status: 401 });
        expect(API.getChannelName("1")).rejects.toEqual(States.NOTAUTHORIZED);
    });
});

describe("API auth", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("Should properly resolve if status code is not 401", () => {
        fetchMock.get("*", { channel: "world" });
        expect(API.auth("1").then((res: any) => res.json())).resolves.toEqual({ channel: "world" });
    });
    it("Should properly reject if status code is 401", () => {
        fetchMock.get("*", { status: 401 });
        expect(API.auth("1")).rejects.toEqual(States.NOTAUTHORIZED);
    });
    it("Should properly reject if network error thrown", () => {
        fetchMock.get("*", { throws: { message: "network error" } });
        expect(API.auth("1")).rejects.toEqual(States.OFFLINE);
    });
});

describe("UserInfo API", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it("Should properly resolve if status code is not 401", () => {
        fetchMock.get("*", { channel: "world" });
        expect(API.getUserInfo()).resolves.toEqual({ channel: "world" });
    });

    it("Should properly reject if status code is 401", () => {
        fetchMock.get("*", { status: 401 });
        expect(API.getUserInfo()).rejects.toEqual(States.NOTAUTHORIZED);
    });

    it("Should properly reject if status code is 403", () => {
        fetchMock.get("*", { status: 403 });
        expect(API.getUserInfo()).rejects.toEqual(States.FORBIDDEN);
    });

    it("Should properly reject if status code is 404", () => {
        fetchMock.get("*", { status: 404 });
        expect(API.getUserInfo()).rejects.toEqual(States.NOTFOUND);
    });
});
