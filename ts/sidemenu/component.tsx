import classnames from "classnames";
import * as React from "react";
import { Link, NavLink, RouteComponentProps } from "react-router-dom";
import "../../scss/modules/_site-menu.scss";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { IUserInfoState } from "../userinfo/reducer";
import { SideMenuStates } from "./reducer";
import { routes } from "./types";

export type ISideMenuOwnProps = RouteComponentProps<IChannelRoute>;

export interface ISideMenuStateProps {
    menuState: SideMenuStates;
    isModOnChannel: boolean;
    userInfo: IUserInfoState;
}

export interface ISideMenuDispatchedProps  {
    hideMenu: () => void;
}

export type ISideMenuProps = ISideMenuOwnProps & ISideMenuStateProps & ISideMenuDispatchedProps;

interface ISideMenuCurrentRoute {
    link: string;
    label: string;
}

interface ISideMenuState {
    readonly routes: ISideMenuCurrentRoute[];
}

export default class SideMenu extends React.PureComponent<ISideMenuProps, ISideMenuState> {

    public static generateRoutesState = (
        isMod: boolean,
        channelID: string): ISideMenuCurrentRoute[] => {
        if (channelID === "") {
            return [];
        }
        if (isMod === false) {
            return routes.filter((item) => item.modsOnly !== true).map((item) => {
                return {
                    label: item.label,
                    link: item.link(channelID),
                };
            });
        } else {
            return routes.map((item) => {
                return {
                    label: item.label,
                    link: item.link(channelID),
                };
            });
        }
    }

    public static getDerivedStateFromProps(props: ISideMenuProps, state: ISideMenuState) {
        return {
            routes: SideMenu.generateRoutesState(
                props.isModOnChannel,
                props.match.params.channelID,
            ),
        };
    }

    constructor(props: ISideMenuProps) {
        super(props);

        this.state = {
            routes: SideMenu.generateRoutesState(
                props.isModOnChannel,
                props.match.params.channelID,
            ),
        };
    }

    public render() {
        const headerClassNames = classnames({
            "site-menu": true,
            "site-menu--hidden": this.props.menuState !== SideMenuStates.SHOWN,
            "site-menu--shown": this.props.menuState === SideMenuStates.SHOWN,
        });
        return (
            <div className={headerClassNames}>
                <div className="site-menu__container" onClick={this.props.hideMenu}>
                    {this.generateLink()}
                    {this.state.routes.map(this.generateMenuItem)}
                </div>
            </div>
        );
    }

    private generateLink = () => {
        const channel = this.props.match.params.channelID;
        if (!channel || channel === "") {
            return null;
        }
        return (
            <Link to={Routes.toChannelIndex(channel)} className="site-menu__header">
                <img src={this.props.userInfo.avatarUrl} />
                <div className="site-menu__header-info">
                    <div>{this.props.userInfo.username} </div>
                    <span>
                        {this.generateCurrentChannel()}
                    </span>
                </div>
            </Link>
        );
    }

    private generateCurrentChannel = () => {
        return l10n.formatString(l10n.CHANNEL_TITLE, <ChannelName channelID={this.props.match.params.channelID} />);
    }

    private generateMenuItem = (route: ISideMenuCurrentRoute) => (
        <NavLink
            key={route.link}
            activeClassName="site-menu__link--selected"
            to={route.link}
            className="site-menu__link"
        >
            <span>{route.label}</span>
        </NavLink>
    )
}
