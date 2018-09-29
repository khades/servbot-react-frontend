import * as React from "react";
import { create } from "react-test-renderer";
import { SideMenuStates } from "../sidemenu/reducer";
import HeaderComponent, { IHeaderProps } from "./component";

describe("Header", () => {
    it("should render properly for SideMenuState == SHOWN ", () => {
        const props: IHeaderProps = {
            hideMenu: () => 1,
            showMenu: () => 1,
            sideMenuState: SideMenuStates.SHOWN,
        };
        const header = create(
            <HeaderComponent {...props} />,
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
    it("should render properly for SideMenuState == HIDDEN ", () => {
        const props: IHeaderProps = {
            hideMenu: () => 1,
            showMenu: () => 1,
            sideMenuState: SideMenuStates.HIDDEN,
        };
        const header = create(
            <HeaderComponent {...props} />,
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
    it("should render properly for SideMenuState == INIT ", () => {
        const props: IHeaderProps = {
            hideMenu: () => 1,
            showMenu: () => 1,
            sideMenuState: SideMenuStates.INIT,
        };
        const header = create(
            <HeaderComponent {...props} />,
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});
