import classnames from "classnames";
import * as React from "react";
import { l10n } from "../../l10n/l10n";
import { ISubDayVote } from "../types";

interface IWinnerProps extends ISubDayVote {
    subsOnly: boolean;
    remove: (user: string) => void;
    isActive: boolean;
}
const winner = React.memo((content: IWinnerProps) => {

    const userClasses = classnames({
        "subday__winner-user": true,
        "subday__winner-user--sub": content.subsOnly === false && content.isSub === true,
    });

    let button = null;

    if (content.isActive === true) {
        const remove = () => {
            const id = this.props.content.id;
            this.props.pullSubDayWinner(this.props.channelID, id, content.user);
        };
        button = (
            <button type="button" data-id={content.user} onClick={remove}>
                {l10n.SUBDAY_REMOVE_WINNER}
            </button>
        );
    }

    return (
        <div className="subday__winner" >
            <div className={userClasses}>
                {content.user}
            </div>
            <div className="subday__winner-game">
                {content.game}
            </div>
            {button}
        </div>
    );
});

export default winner;
