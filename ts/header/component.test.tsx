import * as React from "react";
import { create } from "react-test-renderer";
import { SideMenuStates } from "../sidemenu/reducer";
import Header, { IHeaderProps } from "./component";

describe("Header", () => {
    it("should render properly for SideMenuState == SHOWN ", () => {
        const props: IHeaderProps = {
            getSideMenuState: () => SideMenuStates.SHOWN,
            hideMenu: () => 1,
            showMenu: () => 1,
        };
        const header = create(
            <Header {...props} />,
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
    it("should render properly for SideMenuState == HIDDEN ", () => {
        const props: IHeaderProps = {
            getSideMenuState: () => SideMenuStates.HIDDEN,
            hideMenu: () => 1,
            showMenu: () => 1,
        };
        const header = create(
            <Header {...props} />,
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
    it("should render properly for SideMenuState == INIT ", () => {
        const props: IHeaderProps = {
            getSideMenuState: () => SideMenuStates.INIT,
            hideMenu: () => 1,
            showMenu: () => 1,
        };
        const header = create(
            <Header {...props} />,
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});
