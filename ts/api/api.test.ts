import API from "./api";
import { fetchMock } from "fetch-mock";

describe("ChannelName api", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("Should return proper channelname by id", () => {
        fetchMock.get("*", { channel: "world" });
        expect(API.getChannelName("1")).resolves.toBe("world");
    });
    it("Should return proper channelname by id", () => {

        fetchMock.get("*", { throws: { message: "network error" } });
        expect(API.getChannelName("1")).rejects.toEqual(Error("NOT FOUND"));

    });
});
