import classnames from "classnames";
import * as React from "react";
import { ISubDayVote } from "../types";

interface IVoteProps extends ISubDayVote {
    subsOnly: boolean;
}
const vote = React.memo((item: IVoteProps) => {
    const content = this.props.content;
    const userClasses = classnames({
        "subday__vote-user": true,
        "subday__vote-user--sub": content.subsOnly === false && item.isSub === true,
    });
    return (
        <div className="subday__vote">
            <div className={userClasses}>
                {item.user}
            </div>
            <div className="subday__vote-game">
                {item.game}
            </div>
        </div>
    );
});

export default vote;
