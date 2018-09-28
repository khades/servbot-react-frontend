import classnames from "classnames";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../scss/modules/_site-menu.scss";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { IUserInfoState } from "../userinfo/reducer";
import { SideMenuStates } from "./reducer";

export interface ISideMenuProps {
    hideMenu: () => void;
    menuState: SideMenuStates;
    isModOnChannel: boolean;
    userInfo: IUserInfoState;
}

interface IRoute {
    link: (channelID: string) => string;
    label: string;
    modsOnly?: boolean;
}
interface ISideMenuRoute {
    link: string;
    label: string;
}
interface ISideMenuState {
    readonly routes: ISideMenuRoute[];
}
export default class SideMenu extends React.Component<ISideMenuProps, ISideMenuState> {
    public static readonly routes: IRoute[] = [{
        label: l10n.MESSAGE_LOGS,
        link: Routes.ToChannelLogs,
        modsOnly: true,
    },
    {
        label: l10n.BANS,
        link: Routes.ToBans,
        modsOnly: true,
    },
    {
        label: l10n.COMMANDS,
        link: Routes.ToTemplates,
    },
    {
        label: l10n.SUBALERTS,
        link: Routes.ToSubAlerts,
        modsOnly: true,
    },
    {
        label: l10n.AUTOMESSAGES,
        link: Routes.ToAutoMessages,
        modsOnly: true,
    },
    {
        label: l10n.SONGREQUESTS,
        link: Routes.ToSongRequests,
    },
    {
        label: l10n.SUBDAYS,
        link: Routes.ToSubDays,
    },
    {
        label: l10n.SUBSCRIPTIONS,
        link: Routes.ToSubs,
        modsOnly: true,
    },
    {
        label: l10n.EXTERNAL_SERVICES,
        link: Routes.ToExternalServices,
        modsOnly: true,
    },
    {
        label: l10n.SUBTRAIN,
        link: Routes.ToSubTrain,
        modsOnly: true,
    }];

    public static generateRoutesState = (routes: IRoute[], isMod: boolean, channelID: string): ISideMenuRoute[] => {
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
                SideMenu.routes,
                props.isModOnChannel,
                props.userInfo.currentChannel,
            ),
        };
    }

    constructor(props: ISideMenuProps) {
        super(props);

        this.state = {
            routes: SideMenu.generateRoutesState(
                SideMenu.routes,
                props.isModOnChannel,
                props.userInfo.currentChannel,
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
                    {this.generateMenu()}
                </div>
            </div>
        );
    }

    private generateLink = () => {
        if (!this.props.userInfo.currentChannel || this.props.userInfo.currentChannel === "") {
            return null;
        }
        return (
            <Link to={Routes.toChannelIndex(this.props.userInfo.currentChannel)} className="site-menu__header">
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
        return l10n.formatString(l10n.CHANNEL_TITLE, <ChannelName channelID={this.props.userInfo.currentChannel} />);
    }

    private generateMenu = () => {
        return (
            <React.Fragment>
                {this.state.routes.map(this.generateMenuItem)}
            </React.Fragment>
        );
    }

    private generateMenuItem = (route: ISideMenuRoute) => (
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
