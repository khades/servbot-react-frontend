import * as React from "react";
import { Link } from "react-router-dom";
import "../../../scss/modules/_automessages-item.scss";
import { IAutoMessageWithHistory } from "../../api/types";
import { l10n } from "../../l10n/l10n";
import * as Routes from "../../routes/routes";

function generateName(item: IAutoMessageWithHistory): string {
    const message = item.message;
    if (message.trim() !== "" || !(!!item.history) || item.history.length === 0) {
        return message;
    }
    const historyItems = item.history.filter((f) =>
        !!f.message && f.message.trim() !== "").sort((a, b) => a.date - b.date);
    if (historyItems.length === 0) {
        return "";
    } else {
        return historyItems[0].message;
    }
}

function generateState(item: IAutoMessageWithHistory): IListItemState {
    const messageLimit = item.messageThreshold < 0 ? `0/${item.messageLimit}`
        : `${item.messageThreshold}/${item.messageLimit}`;
    const durationLimit = `${new Date(item.durationThreshold).toLocaleString()} (${item.durationLimit / 1000000000})`;
    const hasGame = !!item.game && item.game.trim() !== "";
    return {
        durationLimit,
        hasGame,
        isEmpty: item.message.trim() === "",
        messageLimit,
        name: generateName(item),
    };
}

interface IListItemState {
    isEmpty: boolean;
    hasGame: boolean;
    durationLimit: string;
    messageLimit: string;
    name: string;
}

export default class ListItem extends React.Component<IAutoMessageWithHistory, IListItemState> {

    constructor(props: IAutoMessageWithHistory) {
        super(props);
        this.state = generateState(props);
    }

    public componentDidUpdate(prevProps: IAutoMessageWithHistory) {
        if (prevProps.channelID !== this.props.channelID
            || this.props.id !== prevProps.id
            || this.props.history.length !== prevProps.history.length) {
            this.setState(generateState(this.props));
        }
    }

    public render() {
        const item = this.state;
        return (
            <Link
                to={Routes.ToAutoMessage(this.props.channelID, this.props.id)}
                className="automessages-item"
            >
                <div className="automessages-item__header">
                    <div className="automessages-item__message">
                        {item.name}
                    </div>
                    {item.isEmpty === true && <div className="automessages-item__status">{l10n.DELETED}</div>}
                </div>
                <div className="automessages-item__right-container">
                    <div className="automessages-item__message-limit">
                        {item.messageLimit}
                    </div>
                    < div className="automessages-item__duration-limit" >
                        {item.durationLimit}
                    </div>
                    {item.hasGame === true && <div className="automessages-item__game">{this.props.game}</div>}
                </div>
            </Link>
        );
    }
}
