import classnames from "classnames";

import * as React from "react";
import "../../scss/modules/_headerContent.scss";
import { SideMenuStates } from "../sidemenu/reducer";

export interface IHeaderProps {
    getSideMenuState: () => SideMenuStates;
    hideMenu: () => void;
    showMenu: () => void;
}
export default class Header extends React.Component<IHeaderProps, {}> {
    constructor(props: IHeaderProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    public render() {
        const headerClassNames = classnames({
            "headerContent__menu-button-container": true,
            "headerContent__menu-button__menu-shown": this.props.getSideMenuState() === SideMenuStates.SHOWN,
        });
        return (
            <div className="headerContent">
                <div className={headerClassNames} onClick={this.onClick}>
                    <div className="headerContent__menu-button" />
                </div>
            </div>
        );
    }
    private onClick() {
        if (this.props.getSideMenuState() === SideMenuStates.SHOWN) {
            this.props.hideMenu();
        } else {
            this.props.showMenu();
        }
    }
}
