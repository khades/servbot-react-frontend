import { fetchMock } from "fetch-mock";
import APIClient from "./apiclient";
import States from "./utils/states";

describe("API auth", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("Should properly resolve if status code is not 401", () => {
        fetchMock.get("*", { channel: "world" });
        expect(APIClient.auth("1").then((res: any) => res.json())).resolves.toEqual({ channel: "world" });
    });
    it("Should properly reject if status code is 401", () => {
        fetchMock.get("*", { status: 401 });
        expect(APIClient.auth("1")).rejects.toEqual({ state: States.NOTAUTHORIZED });
    });
    it("Should properly reject if network error thrown", () => {
        fetchMock.get("*", { throws: { message: "network error" } });
        expect(APIClient.auth("1")).rejects.toEqual({ state: States.OFFLINE });
    });
});

// describe("UserInfo API", () => {
//     afterEach(() => {
//         fetchMock.restore();
//     });

//     it("Should properly resolve if status code is not 401", () => {
//         fetchMock.get("*", { channel: "world" });
//         expect(APIClient.getUserInfo()).resolves.toEqual({ channel: "world" });
//     });

//     it("Should properly reject if status code is 401", () => {
//         fetchMock.get("*", { status: 401 });
//         expect(APIClient.getUserInfo()).rejects.toEqual({ state: States.NOTAUTHORIZED });
//     });

//     it("Should properly reject if status code is 403", () => {
//         fetchMock.get("*", { status: 403 });
//         expect(APIClient.getUserInfo()).rejects.toEqual({ state: States.FORBIDDEN });
//     });

//     it("Should properly reject if status code is 404", () => {
//         fetchMock.get("*", { status: 404 });
//         expect(APIClient.getUserInfo()).rejects.toEqual({ state: States.NOTFOUND });
//     });
// });
