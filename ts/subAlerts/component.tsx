
import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_subalerts.scss";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import StatusWrapper from "../statusWrapper/container";
import HistoryItem from "./components/historyItem";
import SubAlertForm from "./components/subAlertForm";
import { ISubAlertsState } from "./reducer";
import { ISubAlerts, ISubAlertsHistory } from "./types";

export type ISubAlertsOwnProps = RouteComponentProps<IChannelRoute>;

export interface ISubAlertsDispatchProps {
    fetchData: (channelID: string) => void;
    setExtended: () => void;
    reset: () => void;
    save: (channelID: string, content: ISubAlerts) => void;
}

export type ISubAlertsProps = ISubAlertsOwnProps & ISubAlertsState & ISubAlertsDispatchProps;

export default class SubAlertsComponent extends React.PureComponent<ISubAlertsProps, ISubAlerts> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ISubAlertsProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public componentWillUnmount() {
        this.props.reset();
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="subalerts">
                    <hgroup>
                        <div className="subalerts__headernm">
                            {l10n.formatString(l10n.SUBALERTS_TITLE, this.renderChannelName())}
                        </div>
                        {this.renderExtendButton()}
                    </hgroup>
                    <SubAlertForm
                        content={this.props.content}
                        isExtended={this.props.isExtended}
                        channelID={this.props.match.params.channelID}
                        save={this.props.save}
                    />
                    {this.renderHistory()}
                </div>
            </StatusWrapper>
        );
    }
    private renderHistory = () => {
        if (this.props.content && this.props.content.history) {
            return (
                <React.Fragment>
                    <div className="subalerts__header">
                        {l10n.SUBALERTS_EDIT_HISTORY}
                    </div>
                    <div className="subalerts__history">
                        {this.props.content.history.map(this.renderHistoryItem)}
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

    private renderHistoryItem(item: ISubAlertsHistory) {
        return <HistoryItem key={new Date(item.date).toLocaleString()} {...item} />;
    }

    private renderExtendButton = () => {
        if (this.props.isExtended === true) {
            return null;
        }
        return (
            <button type="button" onClick={this.props.setExtended}>
                {l10n.SHOW_MORE}
            </button>
        );
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
