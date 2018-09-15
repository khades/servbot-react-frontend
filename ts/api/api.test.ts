import API from "./api";
import { fetchMock } from "fetch-mock";
import States from "../utils/states";

describe("ChannelName api", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("Should return proper channelname by id", () => {
        fetchMock.get("*", { channel: "world" });
        expect(API.getChannelName("1")).resolves.toBe("world");
    });
    it("Should not return proper channelname by id if network error thrown", () => {
        fetchMock.get("*", { throws: { message: "network error" } });
        expect(API.getChannelName("1")).rejects.toEqual(Error(States.NOTFOUND));
    });
    it("Should properly reject if status code is 401", () => {
        fetchMock.get("*", { status: 401 });
        expect(API.getChannelName("1")).rejects.toEqual(Error(States.NOTAUTHORIZED));
    });
});

describe("API auth", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("Should properly resolve if status code is not 401", () => {
        fetchMock.get("*", { channel: "world" });
        expect(API.auth("1").then((res) => res.json())).resolves.toEqual({ channel: "world" });
    });
    it("Should properly reject if status code is 401", () => {
        fetchMock.get("*", { status: 401 });
        expect(API.auth("1")).rejects.toEqual(Error(States.NOTAUTHORIZED));
    });
    it("Should properly reject if network error thrown", () => {
        fetchMock.get("*", { throws: { message: "network error" } });
        expect(API.getChannelName("1")).rejects.toEqual(Error(States.NOTFOUND));
    });
});
