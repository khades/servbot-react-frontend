import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { create } from "react-test-renderer";
import configureStore from "redux-mock-store";
import { IChannelNameState } from "../channelName/reducer";
import * as Routes from "../routes/routes";
import States from "../utils/states";
import StartPageComponent, { IStartPageProps } from "./component";

jest.mock("../../config");

describe("Start Page", () => {
    const storeState: IChannelNameState = {
        2342342: {
            name: "User",
            state: States.READY,
        },
        2345: {
            name: "Channel",
            state: States.READY,
        },
    };
    const store = configureStore()({ ChannelName: storeState });
    it("should render properly for mods", () => {
        const props: IStartPageProps = {
            isModOnChannel: true,
            // @ts-ignore
            match: {
                params: {
                    channelID: "354",
                },
            },
            userInfo: {
                avatarUrl: "",
                modChannels: [{
                    channel: "test1",
                    channelID: "354",
                },
                {
                    channel: "test2",
                    channelID: "3545",
                },
                {
                    channel: "test3",
                    channelID: "3548",
                }],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.toChannelIndex("354")]}>
                    <StartPageComponent {...props} />
                </MemoryRouter>

            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
    it("should render properly for non-mods", () => {
        const props: IStartPageProps = {
            isModOnChannel: false,
            // @ts-ignore
            match: {
                params: {
                    channelID: "354",
                },
            },
            userInfo: {
                avatarUrl: "",
                modChannels: [{
                    channel: "test1",
                    channelID: "354",
                },
                {
                    channel: "test2",
                    channelID: "3545",
                },
                {
                    channel: "test3",
                    channelID: "3548",
                }],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.toChannelIndex("354")]}>
                    <StartPageComponent {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
});
