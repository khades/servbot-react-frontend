import * as React from "react";
import "../../scss/modules/_start-page.scss";

// export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// export class Hello extends React.Component<HelloProps, {}> {
export default class StartPage extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="start-page">
                <div className="start-page__hgroup">
                    <div className="start-page__header">Канал khadesru</div>
                    <div>Вы - модератор на канале khadesru</div>
                </div>
                <h1>Каналы, доступные для управления</h1>
                <div className="start-page__mod-channels">
                    <a href="#/channel/40635840" className="start-page__mod-channels__channel">khadesru</a>
                    <a href="#/channel/106806898" className="start-page__mod-channels__channel">namikotakumi</a>
                    <a href="#/channel/40298003" className="start-page__mod-channels__channel">honeymad</a>
                    <a href="#/channel/73076780" className="start-page__mod-channels__channel">minorinka</a>
                    <a href="#/channel/27954235" className="start-page__mod-channels__channel">nuke73</a>
                    <a href="#/channel/45912780" className="start-page__mod-channels__channel">mistafaker</a>
                    <a href="#/channel/89849983" className="start-page__mod-channels__channel">pinkie_pie</a>
                    <a href="#/channel/92283890" className="start-page__mod-channels__channel">nimferna</a>
                    <a href="#/channel/48538184" className="start-page__mod-channels__channel">mob5tertv</a></div>
                <div className="start-page__language">
                    <div className="control-group">
                        <label htmlFor="newCommand" className="">Язык приложения</label>
                        <select id="newCommand">
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    },
};
