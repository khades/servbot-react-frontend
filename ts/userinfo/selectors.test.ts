import States from "../utils/states";

import { IUserInfoState } from "./reducer";
import * as selectors from "./selectors";

describe("ChannelName selectors", () => {
    it("should return true if works properly", () => {
        const initialState: IUserInfoState = {
            avatarUrl: "",
            currentChannel: "323232",
            modChannels: [{
                channelName: "asdasd",
                channelNameID: "323232",
            },
            {
                channelName: "sdfsdfsdf",
                channelNameID: "43434343",
            },
            {
                channelName: "dfgdfgdfg",
                channelNameID: "312625324",
            },
            {
                channelName: "qweqeqw",
                channelNameID: "123158123",
            },
            {
                channelName: "345345345",
                channelNameID: "54372934",
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
                channelName: "asdasd",
                channelNameID: "323232",
            },
            {
                channelName: "sdfsdfsdf",
                channelNameID: "43434343",
            },
            {
                channelName: "dfgdfgdfg",
                channelNameID: "312625324",
            },
            {
                channelName: "qweqeqw",
                channelNameID: "123158123",
            },
            {
                channelName: "345345345",
                channelNameID: "54372934",
            }],
            state: States.NOTINITIATED,
            userID: "",
            username: "",
        };
        expect(selectors.getIfUserIsModerator(initialState)).toBe(false);
    });
});
