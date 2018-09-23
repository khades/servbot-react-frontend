import * as React from "react";
import "../../scss/modules/_start-page.scss";
import Select, { ISelectProps } from "../basicComponents/select";
import { l10n, setLang } from "../l10n/l10n";
import { IUserInfoState } from "../userinfo/reducer";

export interface IStartPageProps extends IUserInfoState {
    userInfo: IUserInfoState;
    getIfUserIsMod: () => boolean;
    setCurrentChannel: (channel: string) => void;
    getUserInfo: () => void;
}

export default class StartPage extends React.Component<IStartPageProps, {}> {
    constructor(props: IStartPageProps) {
        super(props);
        props.getUserInfo();
        this.generateModChannels = this.generateModChannels.bind(this);
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
                    {this.generateModChannels()}
                </div>
                <div className="start-page__language">
                    <Select {...langSelectProps} />

                </div>
            </div>
        );
    }
    private generateModChannels() {
        return this.props.userInfo.modChannels.map((item) =>
            (
                <a
                    key={item.channelNameID}
                    href={"#/channel/" + item.channelNameID}
                >
                    {item.channelName}
                </a>
            ));
    }
}
