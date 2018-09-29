import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "../../scss/modules/_channel-users.scss";
import { IUserLogsInfo } from "../api/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import { IChannelUsersState } from "./reducer";

interface IChannelUsersRoute {
    channelID: string;
}

interface IChannelUsersProps extends RouteComponentProps<IChannelUsersRoute>, IChannelUsersState {
    fetchData: (channelID: string, username?: string) => void;
}
export default class ChannelUsersComponent extends React.Component<IChannelUsersProps, {}> {
    private textInput: React.RefObject<HTMLInputElement> = React.createRef();

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: IChannelUsersProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public render = () => (
        <StatusWrapper state={this.props.state}>
            <div className="channel-users">
                <hgroup className="channel-users__hgroup">
                    <div className="channel-users__header">
                        {l10n.formatString(l10n.USER_LIST, this.renderChannelName())}
                    </div>
                    <div className="channel-users__search-input">
                        <input
                            ref={this.textInput}
                            defaultValue={this.props.userName}
                            placeholder={l10n.USER_LIST_INPUT_PLACEHOLDER}
                        />
                        <div onClick={this.search} className="channel-users__search-input-button">
                            🔍
                        </div>
                    </div>
                </hgroup>
                {this.generateUserList()}
            </div>
        </StatusWrapper>
    )

    private search = () => {
        const value = this.textInput.current.value;
        this.props.fetchData(this.props.match.params.channelID, value);
    }
    private generateUserList = () => {
        if (!this.props.users || this.props.users.length === 0) {
            return null;
        }
        return (
            <div className="channel-users__container">
                {this.props.users.map(this.generateUserLink)}
            </div>
        );
    }

    private generateUserLink = (user: IUserLogsInfo) => {
        return (
            <Link
                className="channel-users__user-link"
                to={Routes.ToChannelUserLogs(this.props.match.params.channelID, user.userID)}
            >
                {user.user}
            </Link>
        );
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
