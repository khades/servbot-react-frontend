import * as React from "react";
import "../../../scss/modules/_automessage-history.scss";
import { IAutoMessageHistory } from "../types";

export default class HistoryItem extends React.PureComponent<IAutoMessageHistory, {}> {
    public render() {
        const game = this.props.game && this.props.game !== "";
        return (
            <div className="automessage-history">
                <div className="automessage-history__line">
                    <div className="automessage-history__user">
                        {this.props.user}
                        <div className="automessage-history__user__tooltip">
                            {this.props.user}#{this.props.userID}
                        </div>
                    </div>
                    <div className="automessage-history__date">
                        {new Date(this.props.date).toLocaleString()}
                    </div>
                </div>
                <div className="automessage-history__line">
                    <div className="automessage-history__duration-limit">
                        {this.props.durationLimit / 1000000000}
                    </div>
                    <div className="automessage-history__message-limit">
                        {this.props.messageLimit}
                    </div>
                </div>
                <div className="automessage-history__message-limit">
                    {this.props.message}
                </div>
                {game === true && <div className="automessage-history__game">{this.props.game}</div>}
            </div>
        );
    }
}
