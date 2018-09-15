import * as React from "react";
import "../../scss/modules/_site-menu.scss";

// export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// export class Hello extends React.Component<HelloProps, {}> {
export default class SideMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="site-menu">
                <a href="#/channel/40635840" className="site-menu__header">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/d7bbfe70-9962-4e76-8a10-267a0cea9a64-profile_image-300x300.png" />
                    <div className="site-menu__header-info">
                        <div>khadesru </div>
                        <span>Канал khadesru</span>
                    </div>
                </a>
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
            </div>
        );
    }
};

