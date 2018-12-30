import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { create } from "react-test-renderer";
import configureStore from "redux-mock-store";
import IChannelRoute from "../channel/types";
import { IChannelNameState } from "../channelName/reducer";
import * as Routes from "../routes/routes";
import {IUserModInfo} from "../userinfo/types";
import getMockRouterProps from "../utils/getMockRouterProps";
import States from "../utils/states";
import SideMenu from "./component";
import { SideMenuStates } from "./reducer";

jest.mock("../../config");

describe("Side Menu", () => {
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
        const props = {
            hideMenu: () => {return; },
            isModOnChannel: true,
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                modChannels: [] as IUserModInfo[],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const matchProps = getMockRouterProps<IChannelRoute>({
            channelID: "2345",
        });
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("2345")]}>
                    <SideMenu {...matchProps} {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });

    it("should render properly for non-mods", () => {
        const props = {
            hideMenu: () => "boo",
            isModOnChannel: false,
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                modChannels: [] as IUserModInfo[],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const matchProps = getMockRouterProps<IChannelRoute>({
            channelID: "234567",
        });

        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("2345")]}>
                    <SideMenu {...matchProps} {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
    it("should not render if not ready", () => {
        const props = {
            hideMenu: () => "boo",
            isModOnChannel: false,
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                modChannels: [] as IUserModInfo[],
                state: States.LOADING,
                userID: "",
                username: "",
            },
        };
        const matchProps = getMockRouterProps<IChannelRoute>({
            channelID: "2345",
        });
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("2345")]}>
                    <SideMenu {...matchProps} {...props} />
                </MemoryRouter>
            </Provider> ,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
});
