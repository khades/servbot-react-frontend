
import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_channel-bans.scss";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import StatusWrapper from "../statusWrapper/container";
import BanItem from "./components/banItem";
import { IBansState } from "./reducer";
import { IBan } from "./types";

export type IBansOwnProps = RouteComponentProps<IChannelRoute>;

export interface IBansDispatchedProps {
    fetchData: (channelID: string) => void;
    reset: () => void;
}

export type IBansProps = IBansOwnProps & IBansState & IBansDispatchedProps;

export default class BansComponent extends React.PureComponent<IBansProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: IBansProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public componentWillUnmount() {
        this.props.reset();
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

    private renderBanItem = (item: IBan) => (
        <BanItem {...item} channelID={this.props.match.params.channelID} key={item.date.toString()} />
    )

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
