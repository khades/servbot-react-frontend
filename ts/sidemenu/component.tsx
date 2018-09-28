import classnames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import "../../scss/modules/_site-menu.scss";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { IUserInfoState } from "../userinfo/reducer";
import { SideMenuStates } from "./reducer";
export interface ISideMenuProps {
    currentChannel: string;
    hideMenu: () => void;
    menuState: SideMenuStates;
    isModOnChannel: boolean;
    userInfo: IUserInfoState;
}

export default class SideMenu extends React.Component<ISideMenuProps, {}> {
    public render() {
        const headerClassNames = classnames({
            "site-menu": true,
            "site-menu--hidden": this.props.menuState !== SideMenuStates.SHOWN,
            "site-menu--shown": this.props.menuState === SideMenuStates.SHOWN,
        });
        return (
            <div className={headerClassNames}>
                <div className="site-menu__container">
                    <Link to={Routes.toChannelIndex(this.props.userInfo.currentChannel)} className="site-menu__header">
                        <img src={this.props.userInfo.avatarUrl} />
                        <div className="site-menu__header-info">
                            <div>{this.props.userInfo.username} </div>
                            <span>
                                {this.generateCurrentChannel()}
                            </span>
                        </div>
                    </Link>
                    {this.generateModMenu()}
                    {this.generateUserMenu()}
                </div>
            </div>
        );
    }
    private generateCurrentChannel = () => {
        return l10n.formatString(l10n.CHANNEL_TITLE, <ChannelName channelID={this.props.userInfo.currentChannel} />);
    }
    private generateModMenu = () => {
        if (this.props.isModOnChannel === false) {
            return null;
        }
        return (
            <React.Fragment>
                <a href="#/channel/40635840/logs" className="site-menu__link">
                    <span>Логи сообщений</span>
                </a>
                <a href="#/channel/40635840/bans" className="site-menu__link">
                    <span>Баны</span>
                </a>
                <a href="#/channel/40635840/templates" className="site-menu__link">
                    <span>Чат - команды</span>
                </a>
                <a href="#/channel/40635840/subAlert" className="site-menu__link">
                    <span>Оповещения о подписке</span>
                </a>
                <a href="#/channel/40635840/autoMessages" className="site-menu__link">
                    <span>Автосообщения </span>
                </a>
                <a href="#/channel/40635840/songrequests" className="site-menu__link">
                    <span>Заказы песен</span>
                </a>
                <a href="#/channel/40635840/subdays" className="site-menu__link">
                    <span>Сабдеи</span>
                </a>
                <a href="#/channel/40635840/subs" className="site-menu__link">
                    <span>Подписки</span>
                </a>
                <a href="#/channel/40635840/externalservices" className="site-menu__link">
                    <span>Внешние сервисы</span>
                </a>
                <a href="#/channel/40635840/subtrain" className="site-menu__link">
                    <span>Сабтрейн</span>
                </a>
            </React.Fragment>
        );
    }
    private generateUserMenu = () => {
        if (this.props.isModOnChannel === true) {
            return null;
        }
        return (
            <React.Fragment>
                <a href="#/channel/40635840/templates" className="site-menu__link">
                    <span>Чат - команды</span>
                </a>
                <a href="#/channel/40635840/songrequests" className="site-menu__link">
                    <span>Заказы песен</span>
                </a>
                <a href="#/channel/40635840/subdays" className="site-menu__link">
                    <span>Сабдеи</span>
                </a>
            </React.Fragment>
        );
    }
}
