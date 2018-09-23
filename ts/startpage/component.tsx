import * as React from "react";
import "../../scss/modules/_start-page.scss";
import Select, { ISelectProps } from "../basicComponents/select";
import { l10n, setLang } from "../l10n/l10n";
import { IUserInfoState } from "../userinfo/reducer";
// export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// export class Hello extends React.Component<HelloProps, {}> {
export interface IStartPageProps extends IUserInfoState {
    getUserInfo: () => void;
}
export default class StartPage extends React.Component<IStartPageProps, {}> {
    constructor(props: IStartPageProps) {
        super(props);
        props.getUserInfo();
    }
    public render() {

        const langSelectProps: ISelectProps = {
            getValue: l10n.getLanguage.bind(l10n),
            getValues: () => [{ value: "en-US", label: "English" }, { value: "ru-RU", label: "Русский" }],
            id: "language",
            label: l10n.LANGUAGE,
            setValue: (lang: string) => {
                setLang(lang);
            },
        };

        return (
            <div className="start-page" >
                <div className="start-page__hgroup">
                    <div className="start-page__header">{l10n.formatString(l10n.CHANNEL_TITLE, "khadesru")}</div>
                    <div>{l10n.formatString(l10n.YOURE_MODERATOR, "khadesru")}</div>
                </div>
                <h1>{l10n.AVAILABLE_CHANNELS_TO_MOD}</h1>
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
                    <Select {...langSelectProps} />

                </div>
            </div>
        );
    }
}
