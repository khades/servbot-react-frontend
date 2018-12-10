import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_automessages.scss";
import "../../scss/modules/_channel-bans.scss";
import { IAutoMessageWithHistory } from "../automessage/types";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import { concatStrings } from "../utils/concatStrings";
import ListItem from "./components/listItem";
import { IAutoMessagesState } from "./reducer";

interface IAutoMessagesProps extends RouteComponentProps<IChannelRoute>, IAutoMessagesState {
    fetchData: (channelID: string) => void;
    showEmpty: () => void;
    hideEmpty: () => void;
}

export default class AutoMessagesComponent extends React.PureComponent<IAutoMessagesProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: IAutoMessagesProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
        // TODO: Find better way
        // const title = concatStrings(l10n.formatString(l10n.AUTOMESSAGES_TITLE, this.renderChannelName()));
        // if (document.title !== title) {
        //     document.title = title;
        // }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="automessages">
                    <hgroup>
                        <div className="automessages__header">
                            {l10n.formatString(l10n.AUTOMESSAGES_TITLE, this.renderChannelName())}
                        </div>
                        <div className="automessages__buttons">
                            <Link
                                className="automessages__create"
                                to={Routes.ToAutoMessage(this.props.match.params.channelID, "new")}
                            >
                                {l10n.AUTOMESSAGES_CREATE_NEW}
                            </Link>
                            {this.renderHideEmptyButton()}
                            {this.renderShowEmptyButton()}

                        </div>
                    </hgroup>
                    <div className="automessages__items">
                        {this.props.content && this.props.content.map(this.renderItem)}
                    </div>
                </div>
            </StatusWrapper >
        );
    }

    private renderItem = (item: IAutoMessageWithHistory) => {
        return (<ListItem key={item.id} {...item} />);
    }

    private renderShowEmptyButton = () => {
        if (this.props.emptyShown === true) {
            return null;
        }
        return (
            <button type="button" onClick={this.props.showEmpty}>
                {l10n.AUTOMESSAGES_SHOW_ALL}
            </button>
        );
    }

    private renderHideEmptyButton = () => {
        if (this.props.emptyShown === false) {
            return null;
        }
        return (
            <button type="button" onClick={this.props.hideEmpty}>
                {l10n.AUTOMESSAGES_SHOW_ACTIVE}
            </button>
        );
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
