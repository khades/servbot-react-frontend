import * as React from "react";
import "../../../scss/modules/_subalerts-history.scss";
import { ISubAlertsHistory } from "../../api/types";
import { isExtended } from "../utils";

const HistoryItemContainer: React.SFC<ISubAlertsHistory> = (props) => {
    return (
        <div className="subalerts-history" key={new Date(props.date).toLocaleString()}>
            <div className="subalerts-history__row">
                <div className="subalerts-history__user">
                    @{props.user}
                    <div className="subalerts-history__user__tooltip">
                        {props.user}#{props.userID}
                    </div>
                </div>
                <div className="subalerts-history__date">
                    {new Date(props.date).toLocaleString()}
                </div>
            </div>
            {props.children}
        </div>
    );
};

const HistoryItem: React.SFC<ISubAlertsHistory> = (props) => {
    const itemIsExtended = isExtended(props);
    if (itemIsExtended === false) {
        return (
            <HistoryItemContainer {...props}>
                <div className="subalerts-history__follower">
                    <div className="subalerts-history__label">
                        "Follower"
                    </div>
                    <div className="subalerts-history__sub-message">
                        {props.followerMessage}
                    </div>
                </div>
                <div className="subalerts-history__five">
                    <div className="subalerts-history__label">
                        "Subscription"
                    </div>
                    <div className="subalerts-history__sub-message">
                        {props.subFiveMessage}
                    </div>
                    <div className="subalerts-history__resub-message">
                        {props.resubFiveMessage}
                    </div>
                    <div className="subalerts-history__repeat-body">
                        {props.resubFiveSmile}
                    </div>
                </div>
            </HistoryItemContainer>
        );
    }

    return (
        <HistoryItemContainer {...props}>
            <div className="subalerts-history__follower">
                <div className="subalerts-history__label">
                    "Follower"
                    </div>
                <div className="subalerts-history__sub-message">
                    {props.followerMessage}
                </div>
            </div>
            <div className="subalerts-history__prime">
                <div className="subalerts-history__label">
                    "5$"
                </div>
                <div className="subalerts-history__sub-message">
                    {props.subPrimeMessage}
                </div>
                <div className="subalerts-history__resub-message">
                    {props.resubPrimeMessage}
                </div>
                <div className="subalerts-history__repeat-body">
                    {props.resubPrimeSmile}
                </div>
            </div>
            <div className="subalerts-history__five">
                <div className="subalerts-history__label">
                    "5$"
                </div>
                <div className="subalerts-history__sub-message">
                    {props.subFiveMessage}
                </div>
                <div className="subalerts-history__resub-message">
                    {props.resubFiveMessage}
                </div>
                <div className="subalerts-history__repeat-body">
                    {props.resubFiveSmile}
                </div>
            </div>
            <div className="subalerts-history__ten">
                <div className="subalerts-history__label">
                    "10$"
                </div>
                <div className="subalerts-history__sub-message">
                    {props.subTenMessage}
                </div>
                <div className="subalerts-history__resub-message">
                    {props.resubTenMessage}
                </div>
                <div className="subalerts-history__repeat-body">
                    {props.resubTenSmile}
                </div>
            </div>
            <div className="subalerts-history__twenty-five">
                <div className="subalerts-history__label">
                    "25$"
                </div>
                <div className="subalerts-history__sub-message">
                    {props.subTwentyFiveMessage}
                </div>
                <div className="subalerts-history__resub-message">
                    {props.resubTwentyFiveMessage}
                </div>
                <div className="subalerts-history__repeat-body">
                    {props.resubTwentyFiveSmile}
                </div>
            </div>
        </HistoryItemContainer>
    );
};

export default HistoryItem;
