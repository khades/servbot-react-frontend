import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_external-services";
import CheckBox from "../basicComponents/checkbox";
import Input from "../basicComponents/input";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import StatusWrapper from "../statusWrapper/container";
import States from "../utils/states";
import { IExternalServicesState } from "./reducer";
import { IVkGroupInfoForm } from "./types";

interface IExternalServicesProps extends RouteComponentProps<IChannelRoute>, IExternalServicesState {
    fetchData: (channelID: string) => void;
    saveVKInfo: (channelID: string, content: IVkGroupInfoForm) => void;
}

export default class ExternalServicesComponent extends React.PureComponent<IExternalServicesProps, IVkGroupInfoForm> {
    constructor(props: IExternalServicesProps) {
        super(props);
        this.state = {
            groupName: "",
            notifyOnChange: false,
        };
    }

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: IExternalServicesProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
        if (prevProps.state === States.LOADING && this.props.state === States.READY) {
            this.setState(this.props.content.vkGroupInfo);
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="external-services">
                    <div className="external-services__header">
                        {l10n.formatString(l10n.EXTERNAL_SERVICES_TITLE, this.renderChannelName())}
                    </div>
                    {this.renderVKBlock()}
                </div>
            </StatusWrapper>
        );
    }
    private renderVKBlock = () => {
        return (
            <div className="external-services__block">
                <div className="external-services__subheader">
                    {l10n.EXTERNAL_SERVICES_VKGROUP}
                </div>
                <Input
                    id="groupName"
                    value={this.state.groupName}
                    setValue={this.setVKgroup}
                    label={l10n.EXTERNAL_SERVICES_VKGROUP_NAME}
                />
                <CheckBox
                    id="notifyOnChange"
                    value={this.state.notifyOnChange}
                    label={l10n.EXTERNAL_SERVICES_VKGROUP_NOTIFY}
                    setValue={this.setVKNotify}
                />
                {this.renderVKLastMessage()}
                <button type="button" onClick={this.saveVKInfo}>
                    {l10n.SAVE}
                </button>
            </div>
        );
    }
    private renderVKLastMessage = () => {
        if (!this.props.content || !this.props.content.vkGroupInfo.lastMessageBody) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="external-services__subheader">
                    {l10n.EXTERNAL_SERVICES_VKGROUP_LAST_MESSAGE}
                </div>
                <div>
                    {this.props.content.vkGroupInfo.lastMessageBody}
                </div>
            </React.Fragment>
        );
    }
    private setVKgroup = (groupName: string) => {
        this.setState({ groupName });
    }
    private setVKNotify = (notifyOnChange: boolean) => {
        this.setState({ notifyOnChange });
    }
    private saveVKInfo = () => {
        this.props.saveVKInfo(this.props.match.params.channelID, this.state);
    }
    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
