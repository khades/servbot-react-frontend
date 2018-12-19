import * as React from "react";
import { ITemplateHistory } from "../types";

const HistoryItem = React.memo((item: ITemplateHistory) =>
    (
        <div className="template-history">
            <div className="template-history__row">
                <div className="template-history__user">
                    {item.user}
                    <div className="template-history__user__tooltip">
                        {item.user}
                        #
                    {item.userID}
                    </div>
                </div>
                <div className="template-history__date">
                    {new Date(item.date).toLocaleString()}
                </div>
            </div>
            <div className="template-history__body">{item.template}</div>
        </div>
    ),
);

export default HistoryItem;
