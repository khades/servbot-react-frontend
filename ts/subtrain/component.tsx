import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_subtrain.scss";
import CheckBox from "../basicComponents/checkbox";
import Input from "../basicComponents/input";
import NumericInput from "../basicComponents/numericInput";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import { StatusWrapper } from "../statusWrapper";
import States from "../utils/states";
import { ISubTrainState } from "./reducer";
import { ISubTrainForm } from "./types";

interface ISubTrainProps extends RouteComponentProps<IChannelRoute>, ISubTrainState {
    fetchData: (channelID: string) => void;
    saveData: (channelID: string, content: ISubTrainForm) => void;

}

export default class SubTrainComponent extends React.PureComponent<ISubTrainProps, ISubTrainForm> {
    constructor(props: ISubTrainProps) {
        super(props);
        this.state = {
            appendTemplate: "",
            enabled: false,
            expirationLimit: 600,
            notificationLimit: 180,
            notificationTemplate: "",
            onlyNewSubs: false,
            timeoutTemplate: "",
        };
    }
    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ISubTrainProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
        if (prevProps.state === States.LOADING && this.props.state === States.READY) {
            const state = {
                appendTemplate: this.props.content.appendTemplate,
                enabled: this.props.content.enabled,
                expirationLimit: this.props.content.expirationLimit,
                notificationLimit: this.props.content.notificationLimit,
                notificationTemplate: this.props.content.notificationTemplate,
                onlyNewSubs: this.props.content.onlyNewSubs,
                timeoutTemplate: this.props.content.timeoutTemplate,
            };
            this.setState(state);
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="subtrain">
                    <div className="subtrain__hgroup">
                        <div className="subtrain__header">
                            {l10n.formatString(l10n.SUBTRAIN_TITLE, this.renderChannelName())}
                        </div>
                        {this.renderSubHeader()}
                    </div>

                    <CheckBox
                        id="enabled"
                        value={this.state.enabled}
                        label={l10n.SUBTRAIN_ENABLED}
                        setValue={this.setStateValue}
                    />
                    <CheckBox
                        id="onlyNewSubs"
                        value={this.state.onlyNewSubs}
                        label={l10n.SUBTRAIN_COUNT_ONLY_NEW_SUBS}
                        setValue={this.setStateValue}
                    />
                    <NumericInput
                        id="expirationLimit"
                        value={this.state.expirationLimit}
                        label={l10n.SUBTRAIN_EXPIRATION_DURATION}
                        setValue={this.setStateValue}
                    />
                    <NumericInput
                        id="notificationLimit"
                        value={this.state.notificationLimit}
                        label={l10n.SUBTRAIN_NOTIFICATION_DURATION}
                        setValue={this.setStateValue}
                    />
                    <div>{l10n.SUBTRAIN_CHANGE_WARNING}</div>
                    <Input
                        id="appendTemplate"
                        value={this.state.appendTemplate}
                        label={l10n.SUBTRAIN_ADDITIONAL_SUBMESSAGE}
                        setValue={this.setStateValue}
                    />
                    <Input
                        id="notificationTemplate"
                        value={this.state.notificationTemplate}
                        label={l10n.SUBTRAIN_NOTIFICAION_BODY}
                        setValue={this.setStateValue}
                    />
                    <Input
                        id="timeoutTemplate"
                        value={this.state.timeoutTemplate}
                        label={l10n.SUBTRAIN_EXPIRATION_BODY}
                        setValue={this.setStateValue}
                    />
                    <button type="button" onClick={this.save}>
                        {l10n.SAVE}
                    </button>
                </div>
            </StatusWrapper>
        );
    }
    private save = () => {
        this.props.saveData(this.props.match.params.channelID, this.state);
    }
    private setStateValue = (value: any, id: keyof ISubTrainForm) => {
        // @ts-ignore
        this.setState({ [id]: value });
    }
    private renderSubHeader = () => {
        if (!this.props.content || this.props.content.enabled === false || this.props.content.currentStreak < 1) {
            return null;
        }
        const content = this.props.content;
        const notificationTime = new Date(content.notificationTime).toLocaleString();
        const user = !!content.users ? content.users.join(", ") : "";
        return (
            <React.Fragment>
                <div>
                    {l10n.formatString(l10n.SUBTRAIN_NEXT_NOTIFICATION, notificationTime)}
                </div>
                <div>
                    {l10n.formatString(l10n.SUBTRAIN_END_TIME, new Date(content.expirationTime).toLocaleString())}
                </div>
                <div>
                    {l10n.formatString(l10n.SUBTRAIN_SIZE, content.currentStreak)}
                </div>
                <div>
                    {l10n.formatString(l10n.SUBTRAIN_PARTICIPANTS, user)}
                </div>
            </React.Fragment>
        );
    }
    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
