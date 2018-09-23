import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_site-menu.scss";
import { IUserInfoState } from "../userinfo/reducer";
import { SideMenuStates } from "./reducer";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
export interface ISideMenuProps {
    hideMenu: () => void;
    getMenuState: () => SideMenuStates;
    getIsModOnChannel: () => boolean;
    getUserInfo: () => IUserInfoState;
}
interface ISideMenuState {
    userInfo: IUserInfoState;
}
export default class SideMenu extends React.Component<ISideMenuProps, ISideMenuState> {
    public static getDerivedStateFromProps(props: ISideMenuProps, state: ISideMenuState) {
        return {
            userInfo: props.getUserInfo(),
        };
    }

    constructor(props: ISideMenuProps) {
        super(props);
        this.state = { userInfo: props.getUserInfo() };
        this.generateModMenu = this.generateModMenu.bind(this);
        this.generateUserMenu = this.generateUserMenu.bind(this);
    }

    public render() {
        const headerClassNames = classnames({
            "site-menu": true,
            "site-menu--hidden": this.props.getMenuState() !== SideMenuStates.SHOWN,
            "site-menu--shown": this.props.getMenuState() === SideMenuStates.SHOWN,
        });
        return (
            <div className={headerClassNames}>
                <div className="site-menu__container">
                    <a href="#/channel/40635840" className="site-menu__header">
                        <img src={this.state.userInfo.avatarUrl} />
                        <div className="site-menu__header-info">
                            <div>khadesru </div>
                            <span>
                                {l10n.formatString(l10n.CHANNEL_TITLE, <ChannelName channelID="40635840" />)}
                            </span>
                        </div>
                    </a>
                    {this.generateModMenu()}
                    {this.generateUserMenu()}
                </div>
            </div>
        );
    }
    private generateModMenu() {
        if (this.props.getIsModOnChannel() === false) {
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
    private generateUserMenu() {
        if (this.props.getIsModOnChannel() === true) {
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
