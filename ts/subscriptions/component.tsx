import classnames from "classnames";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_subscriptions.scss";
import { ISubscription } from "../api/types";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import { StatusWrapper } from "../statusWrapper";
import States from "../utils/states";
import time from "../utils/time";
import { WebSocketComponent } from "../utils/WebSocketComponent";
import { ISubscriptionsState } from "./reducer";

interface ISubscriptionsProps extends RouteComponentProps<IChannelRoute>, ISubscriptionsState {
    fetchData: (channelID: string, limit?: number) => void;
    setBookmark: (channelID: string, id: string) => void;
    setLimit: (channelID: string, limit: number) => void;
}

export default class SubscriptionsComponent extends React.PureComponent<ISubscriptionsProps, {}> {

    public componentDidMount() {
        this.fetchData();
    }

    public componentDidUpdate(prevProps: ISubscriptionsProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.fetchData();
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <WebSocketComponent
                    url={`api/channel/${this.props.match.params.channelID}/subs/events`}
                    onMessage={this.fetchData}
                />
                <div className="subscriptions">
                    <div className="subscriptions__hgroup">
                        <div>
                            <div className="subscriptions__header">
                                {l10n.formatString(l10n.SUBSCRIPTIONS_TITLE, this.renderChannelName())}
                            </div>
                            {this.generateSubHeader()}
                        </div>
                        <div className="subscriptions__buttons">
                            <button onClick={this.setLimit}>
                                {l10n.MARK_AS_READ}
                            </button>
                            <button onClick={this.resetLimit}>
                                {l10n.SUBSCRIPTIONS_SHOW_LAST_THREE_DAYS}
                            </button>
                        </div>

                    </div>
                    <div className="subscriptions__items">
                        {this.renderItems()}
                    </div>
                </div>
            </StatusWrapper>
        );
    }
    private fetchData = () => {
        this.props.fetchData(this.props.match.params.channelID, this.props.limits[this.props.match.params.channelID]);

    }
    private setLimit = () => {
        this.props.setLimit(this.props.match.params.channelID, time.now().getTime());
    }
    private resetLimit = () => {
        this.props.setLimit(this.props.match.params.channelID, null);
    }
    private renderItems = () => {
        if (!this.props.content) {
            return null;
        }
        return (
            <React.Fragment>
                {this.props.content.map(this.renderItem)}
            </React.Fragment>
        );
    }
    private generatePlanClassName(item: ISubscription) {

        if (item.subPlan === "Prime") {
            return "subscriptions__item__user subscriptions__item__user--prime";

        }
        if (item.subPlan === "2000") {
            return "subscriptions__item__user subscriptions__item__user--ten-dollars";

        }
        if (item.subPlan === "3000") {
            return "subscriptions__item__user subscriptions__item__user--twenty-five-dollars";

        }
        return "subscriptions__item__user subscriptions__item__user--five-dollars";

    }
    private renderItem = (item: ISubscription) => {
        const bookmark = this.props.bookmarks[this.props.match.params.channelID];
        const itemClasses = classnames({
            "subscriptions__item": true,
            "subscriptions__item--bookmarked": bookmark === item.id,
        });
        const planClass = this.generatePlanClassName(item);
        const onClickHandler = () => this.props.setBookmark(this.props.match.params.channelID, item.id);
        return (
            <div className={itemClasses} key={item.id} onClick={onClickHandler}>
                <div className={planClass}>
                    ${item.user} ({item.count})
                    <div className="subscriptions__item__user__tooltip">
                        {item.user}#{item.userID}
                    </div>

                </div>
                <div className="subscriptions__item__date">
                    {new Date(item.date).toLocaleString()}
                </div>
            </div>
        );
    }
    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
    private generateSubHeader = () => {

        let subs = "0";
        if (!!this.props.content) {
            subs = this.props.content.length.toString();
        }

        if (!!this.props.limits[this.props.match.params.channelID]) {
            const date = new Date(this.props.limits[this.props.match.params.channelID]).toLocaleString();
            return (
                <div className="subscriptions-show__threshold">
                    {l10n.formatString(l10n.SUBSCRIPTIONS_SINCE_DATE, date, subs)}
                </div>
            );
        }
        return (
            <div className="subscriptions-show__threshold">
                {l10n.formatString(l10n.SUBSCRIPTIONS_LAST_THREE_DAYS, subs)}
            </div>
        );
    }
}
