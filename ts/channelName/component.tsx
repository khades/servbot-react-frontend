import * as React from "react";
import "../../scss/modules/_channel-name.scss";
import States from "../utils/states";
import { IChannelName } from "./reducer";

export interface IChannelNameState {
    channelID: string;
    getChannelName: (channelID: string) => void;
    value: IChannelName;
}

export default class ChannelNameComponent extends React.Component<IChannelNameState, {}> {
    public componentDidMount() {
        this.fetchChannelName();
    }
    public componentDidUpdate() {
        this.fetchChannelName();
    }
    public render() {
        const state = this.props.value.state;
        if (state === States.READY) {
            return (
                <span className="channel-name">
                    {this.props.value.name}
                </span>
            );
        }
        if (state === States.NOTFOUND) {
            return (
                <span className="channel-name channel-name--notfound" />
            );
        }
        return (
            <span className="channel-name channel-name--loading" />
        );
    }
    private fetchChannelName = () => {
        if (this.props.value.state === States.NOTINITIATED && this.props.channelID && this.props.channelID !== "") {
            this.props.getChannelName(this.props.channelID);
        }
    }
}
