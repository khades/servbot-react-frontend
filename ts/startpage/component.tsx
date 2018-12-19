import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "../../scss/modules/_start-page.scss";
import Select, { ISelectProps } from "../basicComponents/select";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n, setLang } from "../l10n/l10n";
import * as routes from "../routes/routes";
import StatusWrapper from "../statusWrapper/container";
import { IUserInfoState } from "../userinfo/reducer";

export type IStartPageOwnProps = RouteComponentProps<IChannelRoute>;

export interface IStartPageStateProps {
    userInfo: IUserInfoState;
    isModOnChannel: boolean;
}

export type IStartPageProps = IStartPageOwnProps & IStartPageStateProps;

const langSelectProps: ISelectProps = {
    id: "language",
    label: l10n.LANGUAGE,
    setValue: setLang,
    value: l10n.getLanguage(),
    values: [{ value: "en-US", label: "English" }, { value: "ru-RU", label: "Русский" }],
};

const StartPageComponent = React.memo((props: IStartPageProps) => {
    const modChannels = props.userInfo.modChannels.filter(
        (channel) => channel.channelID !== props.match.params.channelID,
    ).map((item) =>
        (
            <Link
                key={item.channelID}
                to={routes.toChannelIndex(item.channelID)}
            >
                {item.channel}
            </Link>
        ));

    const channelName = <ChannelName channelID={props.match.params.channelID} />;

    const modInfoString = props.isModOnChannel === true ? l10n.YOURE_MODERATOR : l10n.YOURE_NOT_MODERATOR;

    return (
        <StatusWrapper state={props.userInfo.state}>
            <div className="start-page" >
                <div className="start-page__hgroup">
                    <div className="start-page__header">
                        {l10n.formatString(l10n.CHANNEL_TITLE, channelName)}
                    </div>
                    <div>
                        {l10n.formatString(modInfoString, channelName)}
                    </div>
                </div>
                <h1>
                    {l10n.AVAILABLE_CHANNELS_TO_MOD}
                </h1>
                <div className="start-page__mod-channels">
                    {modChannels}
                </div>
                <div className="start-page__language">
                    <Select {...langSelectProps} />
                </div>
            </div>
        </StatusWrapper>
    );
});

export default StartPageComponent;
