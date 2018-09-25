import States from "../utils/states";

import { IUserInfoState } from "./reducer";
import * as selectors from "./selectors";

describe("UserInfo selectors", () => {
    it("should return true if works properly", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "323232",
            modChannels: [{
                channel: "asdasd",
                channelID: "323232",
            },
            {
                channel: "sdfsdfsdf",
                channelID: "43434343",
            },
            {
                channel: "dfgdfgdfg",
                channelID: "312625324",
            },
            {
                channel: "qweqeqw",
                channelID: "123158123",
            },
            {
                channel: "345345345",
                channelID: "54372934",
            }],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };
        expect(selectors.getIfUserIsModerator(initialState)).toBe(true);

    });
    it("should return false if works properly", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "3232323",
            modChannels: [{
                channel: "asdasd",
                channelID: "323232",
            },
            {
                channel: "sdfsdfsdf",
                channelID: "43434343",
            },
            {
                channel: "dfgdfgdfg",
                channelID: "312625324",
            },
            {
                channel: "qweqeqw",
                channelID: "123158123",
            },
            {
                channel: "345345345",
                channelID: "54372934",
            }],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };
        expect(selectors.getIfUserIsModerator(initialState)).toBe(false);
    });
});
