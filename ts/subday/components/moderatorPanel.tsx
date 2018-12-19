import * as React from "react";
import { l10n } from "../../l10n/l10n";
import { ISubDayProps } from "../component";
import Winner from "./winner";

const ModeratorPanel = React.memo((props: ISubDayProps) => {
    const content = props.content;
    if (!content || content.isMod === false) {
        return null;
    }

    function pullSubDayWinner(winner: string) {
        props.pullSubDayWinner(props.match.params.channelID, props.id, winner);
    }

    function pickSubDayWinner() {
        props.pickSubDayWinner(props.match.params.channelID, props.id);
    }

    function closeSubDay() {
        props.closeSubDay(props.match.params.channelID, props.id);
    }

    const winners = content.winners.map((item) => (
        <Winner
            {...item}
            key={item.user}
            isActive={props.content.isActive}
            remove={pullSubDayWinner}
            subsOnly={props.content.subsOnly}
        />
    ));

    const extraButtons = content.subsOnly !== true ? (
        <React.Fragment>
            <button type="button" onClick={this.props.pickSubDaySubWinner}>
                {l10n.SUBDAY_RANDOMIZE_WINNER_SUBS}
            </button>
            <button type="button" onClick={this.props.pickSubDayNonSubWinner}>
                {l10n.SUBDAY_RANDOMIZE_WINNER_NONSUBS}
            </button>
        </React.Fragment>
    ) : null;

    return (
        <React.Fragment>
            <div className="subday__subheader">
                {l10n.SUBDAY_WINNERS}
            </div>
            <div className="subday__winners">
                {winners}
            </div>
            <div className="subday__buttons">
                <button type="button" onClick={pickSubDayWinner}>
                    {l10n.SUBDAY_RANDOMIZE_WINNER}
                </button>
                {extraButtons}
                <button type="button" onClick={closeSubDay}>
                    {l10n.SUBDAY_CLOSE}
                </button>
            </div>
        </React.Fragment>
    );
});

export default ModeratorPanel;
