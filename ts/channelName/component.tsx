import classnames from "classnames";
import * as React from "react";
import { IChannelName } from "./reducer";
import States from "../utils/states";
import "../../scss/modules/_channel-name.scss";
export interface IChannelNameState {
    channelID: string;
    getChannelName: (channelID: string) => void;
    value: IChannelName;
}

export default class ChannelName extends React.Component<IChannelNameState, {}> {
    public componentDidMount() {
        if (this.props.value.state === States.NOTINITIATED) {
            this.props.getChannelName(this.props.channelID);
        }
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
            <span onClick={this.get.bind(this)} className="channel-name channel-name--loading" />
        );
    }
    private get() {
        if (this.props.value.state === States.NOTINITIATED) {
            this.props.getChannelName(this.props.channelID);
        }

    }
}
