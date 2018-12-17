import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_user-logs.scss";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import StatusWrapper from "../statusWrapper/container";
import { IUserLogsState } from "./reducer";
import { IUserBansMessage, IUserLogsMessage, MessageType } from "./types";

interface IUserLogsRoute {
    channelID: string;
    userID: string;
}

interface IUserLogsProps extends RouteComponentProps<IUserLogsRoute>, IUserLogsState {
    fetchData: (channelID: string, userID: string) => void;
    reset: () => void;
}

export default class UserLogsComponent extends React.PureComponent<IUserLogsProps, {}> {
    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID, this.props.match.params.userID);
    }

    public componentDidUpdate(prevProps: IUserLogsProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID ||
            prevProps.match.params.userID !== this.props.match.params.userID
        ) {
            this.props.fetchData(this.props.match.params.channelID, this.props.match.params.userID);
        }
    }

    public componentWillUnmount() {
        this.props.reset();
    }

    public render = () => (
        <StatusWrapper state={this.props.state}>
            <div className="user-logs">
                {this.renderLogsBlock()}
                {this.renderBansBlock()}
            </div>
        </StatusWrapper>
    )

    private renderItem = (item: IUserLogsMessage) => {

        if (item.messageType === MessageType.BAN ||
            item.messageType === MessageType.UNBAN ||
            item.messageType === MessageType.TIMEOUT ||
            item.messageType === MessageType.UNTIMEOUT) {
            return this.renderBanItem(item);
        }
        return this.renderLogItem(item);
    }

    private generateBanType = (item: IUserLogsMessage) => {
        if (item.messageType === MessageType.TIMEOUT) {
            return l10n.formatString(l10n.BANS_TIMEOUT, item.banLength);
        }
        if (item.messageType === MessageType.UNTIMEOUT) {
            return l10n.BANS_UNTIMEOUT;
        }
        if (item.messageType === MessageType.UNBAN) {
            return l10n.BANS_UNBAN;
        }
        return l10n.BANS_PERMANENT;
    }

    private generateBanDescription = (item: IUserLogsMessage) => {
        if (item.banIssuer === "") {
            return null;
        }
        if (item.banReason === "") {
            return (
                <div className="user-logs__ban-description">
                    @{item.banIssuer}
                </div>
            );
        }
        return (
            <div className="user-logs__ban-description">
                @{item.banIssuer} - {l10n.REASON}: {item.banReason}"
            </div>
        );
    }

    private renderBanItem = (item: IUserLogsMessage) => (
        <div className="user-logs__history" key={item.date.toString()}>
            <div className="user-logs__history__row">
                <div className="user-logs__history__ban">
                    <div className="user-logs__ban-reason">
                        {this.generateBanType(item)}
                    </div>
                    {this.generateBanDescription(item)}
                </div>
                <div className="user-logs__history__date">{new Date(item.date).toLocaleString()}</div>
            </div>
        </div>
    )

    private renderLogItem = (item: IUserLogsMessage) => (
        <div className="user-logs__history" key={item.date.toString()}>
            <div className="user-logs__history__row">
                <div className="user-logs__history__username">@{item.username}</div>
                <div className="user-logs__history__date">{new Date(item.date).toLocaleString()}</div>
            </div>
            <div className="user-logs__history__message-body">
                {item.messageBody}
            </div>
        </div>
    )
    private generateSpecialBanType = (item: IUserBansMessage) => {
        if (item.type === MessageType.TIMEOUT) {
            return l10n.formatString(l10n.BANS_TIMEOUT, item.duration);
        }
        if (item.type === MessageType.UNTIMEOUT) {
            return l10n.BANS_UNTIMEOUT;
        }
        if (item.type === MessageType.UNBAN) {
            return l10n.BANS_UNBAN;
        }
        return l10n.BANS_PERMANENT;
    }

    private generateSpecialBanDescription = (item: IUserBansMessage) => {
        if (item.banIssuer === "") {
            return null;
        }
        if (item.reason === "") {
            return (
                <div className="user-logs__ban-description">
                    @{item.banIssuer}
                </div>
            );
        }
        return (
            <div className="user-logs__ban-description">
                @{item.banIssuer} - {l10n.REASON}: {item.reason}"
            </div>
        );
    }

    private renderSpecialBanItem = (item: IUserBansMessage) => (
        <div className="user-logs__history" key={item.date.toString()}>
            <div className="user-logs__history__row">
                <div className="user-logs__history__ban">
                    <div className="user-logs__ban-reason">
                        {this.generateSpecialBanType(item)}
                    </div>
                    {this.generateSpecialBanDescription(item)}
                </div>
                <div className="user-logs__history__date">{new Date(item.date).toLocaleString()}</div>
            </div>
        </div>
    )

    private renderBansBlock = () => {
        if (this.props.content && this.props.content.bans) {
            return (
                <div className="user-logs__block">
                    <hgroup className="user-logs__header">
                        <div>
                            {l10n.formatString(l10n.USER_BANS, this.props.content.user)}
                            {this.renderChannelName()}
                        </div>
                    </hgroup>
                    {this.props.content.bans.map(this.renderSpecialBanItem)}
                </div>
            );
        }
        return null;
    }

    private renderLogsBlock = () => {
        if (this.props.content && this.props.content.messages) {
            return (
                <div className="user-logs__block">
                    <hgroup className="user-logs__header">
                        <div>
                            {l10n.formatString(l10n.USER_LOGS, this.props.content.user)} {this.renderChannelName()}
                        </div>
                    </hgroup>
                    {this.props.content.messages.map(this.renderItem)}

                </div>
            );
        }
        return null;
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
