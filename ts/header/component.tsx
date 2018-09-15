import * as React from "react";
import "../../scss/modules/_headerContent.scss";

export default class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="headerContent">
                <div className="headerContent__menu-button-container">
                    <div className="headerContent__menu-button" />
                </div>
            </div>
        );
    }
}
