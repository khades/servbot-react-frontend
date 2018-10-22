import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_automessage.scss";
import "../../scss/modules/_channel-bans.scss";
import { IAutoMessage } from "../api/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import Form from "./components/form";
import HistoryItem from "./components/historyItem";
import { IAutoMessageState } from "./reducer";

export interface IAutoMessageRoute {
    channelID: string;
    id: string;
}

interface IAutoMessageProps extends RouteComponentProps<IAutoMessageRoute>, IAutoMessageState {
    createNew: (channelID: string) => void;
    fetchData: (channelID: string, id: string, init: boolean) => void;
    saveData: (channelID: string, id: string, content: IAutoMessage) => void;
    saveNew: (channelID: string, content: IAutoMessage) => void;
}

export default class AutoMessageComponent extends React.PureComponent<IAutoMessageProps, {}> {

    public componentDidMount() {
        if (this.props.match.params.id === "new") {
            this.props.createNew(this.props.match.params.channelID);
        } else {
            this.props.fetchData(this.props.match.params.channelID, this.props.match.params.id, false);
        }
    }

    public componentDidUpdate(prevProps: IAutoMessageProps) {

        if (prevProps.id === "" && this.props.id !== "") {
            this.props.history.push(Routes.ToAutoMessage(this.props.channelID, this.props.id));
            return;
        }
        if (prevProps.match.params.channelID !== this.props.match.params.channelID ||
            prevProps.match.params.id !== this.props.match.params.id) {
            const forcedUpdate = prevProps.id !== "";
            this.props.fetchData(this.props.match.params.channelID, this.props.match.params.id, forcedUpdate);
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="automessage">
                    {this.generateHeader()}
                    <Form
                        id={this.props.id}
                        channelID={this.props.match.params.channelID}
                        content={this.props.content}
                        isNew={this.props.isNew}
                        create={this.props.saveNew}
                        save={this.props.saveData}
                        validationError={this.props.validationError}
                    />

                    {this.generateHistory()}
                </div>
            </StatusWrapper>
        );
    }
    private generateHeader = () => {
        if (!this.props.content || this.props.isNew === true) {
            return null;
        }
        const object = this.props.content;
        const messageThreshold = object.messageThreshold < 0 ? "0" : object.messageThreshold;
        const durationThreshold = new Date(object.durationThreshold).toLocaleString();
        return (
            <React.Fragment>
                <div className="automessage__header">
                    {l10n.AUTOMESSAGES_INFORMATION}
                </div>
                <div className="automessage__stats">
                    <div className="automessage__stats__messagethreshold">
                        {l10n.formatString(l10n.AUTOMESSAGES_NEXT_MESSAGETHRESHOLD, messageThreshold)}
                    </div>
                    <div className="automessage__stats__datethreshold">
                        {l10n.formatString(l10n.AUTOMESSAGES_NEXT_DURATIONTHRESHOLD, durationThreshold)}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    private generateHistory = () => {
        if (!this.props.content || this.props.isNew === true || !this.props.content.history) {
            return null;
        }
        const object = this.props.content.history;
        return (
            <div className="automessage__history">
                {object.map((item) => <HistoryItem key={item.date} {...item} />)}
            </div>
        );
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
