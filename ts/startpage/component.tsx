import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "../../scss/modules/_start-page.scss";
import Select, { ISelectProps } from "../basicComponents/select";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n, setLang } from "../l10n/l10n";
import * as routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import { IUserInfoState } from "../userinfo/reducer";

export interface IStartPageProps extends RouteComponentProps<IChannelRoute> {
    userInfo: IUserInfoState;
    isModOnChannel: boolean;
}

export default class StartPage extends React.Component<IStartPageProps, {}> {
    private langSelectProps: ISelectProps = {
        id: "language",
        label: l10n.LANGUAGE,
        setValue: setLang,
        value: l10n.getLanguage(),
        values: [{ value: "en-US", label: "English" }, { value: "ru-RU", label: "Русский" }],
    };

    public render() {
        return (
            <StatusWrapper state={this.props.userInfo.state}>
                <div className="start-page" >
                    <div className="start-page__hgroup">
                        <div className="start-page__header">
                            {l10n.formatString(l10n.CHANNEL_TITLE, this.renderChannelName())}
                        </div>
                        <div>
                            {this.renderChannelModInfo()}
                        </div>
                    </div>
                    <h1>
                        {l10n.AVAILABLE_CHANNELS_TO_MOD}
                    </h1>
                    <div className="start-page__mod-channels">
                        {this.generateModChannels()}
                    </div>
                    <div className="start-page__language">
                        <Select {...this.langSelectProps} />

                    </div>
                </div>
            </StatusWrapper>
        );
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
    private renderChannelModInfo = () => {
        if (this.props.isModOnChannel === true) {
            return (
                <React.Fragment>
                    {l10n.formatString(l10n.YOURE_MODERATOR, this.renderChannelName())}
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {l10n.formatString(l10n.YOURE_NOT_MODERATOR, this.renderChannelName())}
            </React.Fragment>
        );
    }
    private generateModChannels = () => {
        return this.props.userInfo.modChannels.filter(
            (channel) => channel.channelID !== this.props.match.params.channelID,
        ).map((item) =>
            (
                <Link
                    key={item.channelID}
                    to={routes.toChannelIndex(item.channelID)}
                >
                    {item.channel}
                </Link>
            ));
    }
}
