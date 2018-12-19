import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_automessage.scss";
import "../../scss/modules/_channel-bans.scss";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import StatusWrapper from "../statusWrapper/container";
import Form from "./components/form";
import AutoMessageHeader from "./components/header";
import AutoMessageHistory from "./components/history";
import { IAutoMessageState } from "./reducer";
import { IAutoMessage } from "./types";

export interface IAutoMessageRoute {
    channelID: string;
    id: string;
}

export type IAutoMessageOwnProps = RouteComponentProps<IAutoMessageRoute>;

export interface IAutoMessageDispatchedProps {
    createNew: (channelID: string) => void;
    fetchData: (channelID: string, id: string, init: boolean) => void;
    saveData: (channelID: string, id: string, content: IAutoMessage) => void;
    saveNew: (channelID: string, content: IAutoMessage) => void;
    reset: () => void;
}

export type IAutoMessageProps = IAutoMessageOwnProps
    & IAutoMessageState
    & IAutoMessageDispatchedProps;

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

    public componentWillUnmount() {
        this.props.reset();
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="automessage">
                    <AutoMessageHeader {...this.props} />
                    <Form
                        id={this.props.id}
                        channelID={this.props.match.params.channelID}
                        content={this.props.content}
                        isNew={this.props.isNew}
                        create={this.props.saveNew}
                        save={this.props.saveData}
                        validationError={this.props.validationError}
                    />

                    <AutoMessageHistory {...this.props} />
                </div>
            </StatusWrapper>
        );
    }
}
