import * as React from "react";
import "../../../scss/modules/_automessage-history.scss";
import { IAutoMessageHistory } from "../types";

const HistoryItem = React.memo((props: IAutoMessageHistory) => {
    const game = props.game && props.game !== "";
    return (
        <div className="automessage-history">
            <div className="automessage-history__line">
                <div className="automessage-history__user">
                    {props.user}
                    <div className="automessage-history__user__tooltip">
                        {props.user}#{props.userID}
                    </div>
                </div>
                <div className="automessage-history__date">
                    {new Date(props.date).toLocaleString()}
                </div>
            </div>
            <div className="automessage-history__line">
                <div className="automessage-history__duration-limit">
                    {props.durationLimit / 1000000000}
                </div>
                <div className="automessage-history__message-limit">
                    {props.messageLimit}
                </div>
            </div>
            <div className="automessage-history__message-limit">
                {props.message}
            </div>
            {game === true && <div className="automessage-history__game">{props.game}</div>}
        </div>
    );
});

export default HistoryItem;
