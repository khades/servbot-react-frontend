import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_headerContent.scss";
import { SideMenuStates } from "../sidemenu/reducer";

export interface IHeaderProps {
    sideMenuState: SideMenuStates;
    hideMenu: () => void;
    showMenu: () => void;
}
export default class HeaderComponent extends React.Component<IHeaderProps, {}> {
    public render() {
        const headerClassNames = classnames({
            "headerContent__menu-button-container": true,
            "headerContent__menu-button__menu-shown": this.props.sideMenuState === SideMenuStates.SHOWN,
        });
        return (
            <div className="headerContent">
                <div className={headerClassNames} onClick={this.onClick}>
                    <div className="headerContent__menu-button" />
                </div>
            </div>
        );
    }
    private onClick = () => {
        if (this.props.sideMenuState === SideMenuStates.SHOWN) {
            this.props.hideMenu();
        } else {
            this.props.showMenu();
        }
    }
}
