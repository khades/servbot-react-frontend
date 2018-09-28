import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { create } from "react-test-renderer";
import configureStore from "redux-mock-store";
import { IChannelNameStore } from "../channelName/reducer";
import * as Routes from "../routes/routes";
import States from "../utils/states";
import SideMenu, { ISideMenuProps } from "./component";
import { SideMenuStates } from "./reducer";
describe("Side Menu", () => {
    const storeState: IChannelNameStore = {
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
        const props: ISideMenuProps = {
            hideMenu: () => { },
            isModOnChannel: true,
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                currentChannel: "2345",
                modChannels: [],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToBans(props.userInfo.currentChannel)]}>
                    <SideMenu {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });

    it("should render properly for non-mods", () => {
        const props: ISideMenuProps = {
            hideMenu: () => { },
            isModOnChannel: false,
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                currentChannel: "2345",
                modChannels: [],
                state: States.READY,
                userID: "2342342",
                username: "63636363",
            },
        };
        const notifications = create(
            <Provider store={store}>

                <MemoryRouter initialEntries={[Routes.ToTemplates(props.userInfo.currentChannel)]}>
                    <SideMenu {...props} />
                </MemoryRouter>
            </Provider>,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
    it("should not render if not ready", () => {
        const props: ISideMenuProps = {
            hideMenu: () => { },
            isModOnChannel: false,
            menuState: SideMenuStates.SHOWN,
            userInfo: {
                avatarUrl: "",
                currentChannel: "",
                modChannels: [],
                state: States.LOADING,
                userID: "",
                username: "",
            },
        };
        const notifications = create(
            <Provider store={store}>
                <MemoryRouter initialEntries={[Routes.ToTemplates("1231")]}>
                    <SideMenu {...props} />
                </MemoryRouter>
            </Provider> ,
        );
        expect(notifications.toJSON()).toMatchSnapshot();
    });
});
