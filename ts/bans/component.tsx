
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_channel-bans.scss";
import { IBan } from "../api/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import { IBansState } from "./reducer";
interface IBansRoute {
    channelID: string;
}

interface IBansProps extends RouteComponentProps<IBansRoute>, IBansState {
    fetchData: (channelID: string) => void;
}

export default class BansComponent extends React.PureComponent<IBansProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: IBansProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public render = () => (
        <StatusWrapper state={this.props.state}>
            <div className="channel-bans">
                <div className="channel-bans__page-header">
                    {l10n.formatString(l10n.BANS_TITLE, this.renderChannelName())}
                </div>
                <div className="channel-bans__items">
                    {this.props.bans && this.props.bans.map(this.renderBanItem)}
                </div>

            </div>
        </StatusWrapper>
    )

    private generateBanType = (item: IBan) => {
        if (item.banLength > 0) {
            return l10n.formatString(l10n.TIME_SECONDS, item.banLength);
        }
        return l10n.BANS_PERMANENT;
    }

    private renderBanItem = (item: IBan) => (
        <Link
            to={Routes.ToChannelUserLogs(this.props.match.params.channelID, item.userID)}
            className="channel-bans__item"
            key={item.date.toString()}
        >
            <div className="channel-bans__header">
                <div className="channel-bans__name">
                    @{item.user}
                </div>
                <div className="channel-bans__date">
                    {new Date(item.date).toLocaleString()}
                </div>
            </div>
            <div className="channel-bans__duration">
                {this.generateBanType(item)}
            </div>

        </Link>
    )

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
