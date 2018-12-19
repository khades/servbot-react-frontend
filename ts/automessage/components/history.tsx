import * as React from "react";
import { IAutoMessageState } from "../reducer";
import HistoryItem from "./historyItem";

const AutoMessageHistory = React.memo((props: IAutoMessageState) => {
    if (!props.content || props.isNew === true || !props.content.history) {
        return null;
    }
    const object = props.content.history;
    return (
        <div className="automessage__history">
            {object.map((item) => <HistoryItem key={item.date} {...item} />)}
        </div>
    );
});

export default AutoMessageHistory;
