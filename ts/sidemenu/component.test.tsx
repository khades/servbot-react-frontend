import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { create } from "react-test-renderer";
import configureStore from "redux-mock-store";
import { IChannelNameState } from "../channelName/reducer";
import * as Routes from "../routes/routes";
import States from "../utils/states";
import SideMenu, { ISideMenuProps } from "./component";
import { SideMenuStates } from "./reducer";
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
    const store = configureStore()({ channelName: storeState });
    it("should render properly for mods", () => {
        const props = {
            isModOnChannel: true,
            match: {
                params: {
                    channelID: "2345",
                },
            },
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                modChannels: [],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("2345")]}>
                    <SideMenu {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });

    it("should render properly for non-mods", () => {
        const props = {
            hideMenu: () => "boo",
            isModOnChannel: false,
            match: {
                params: {
                    channelID: "234567",
                },
            },
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                modChannels: [],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("2345")]}>
                    <SideMenu {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
    it("should not render if not ready", () => {
        const props = {
            hideMenu: () => "boo",
            isModOnChannel: false,

            match: {
                params: {
                    channelID: "2345",
                },
            },
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                modChannels: [],
                state: States.LOADING,
                userID: "",
                username: "",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("2345")]}>
                    <SideMenu {...props} />
                </MemoryRouter>
            </Provider> ,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
});
