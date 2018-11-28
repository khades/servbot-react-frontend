import classnames from "classnames";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_channel-bans.scss";
import "../../scss/modules/_subday.scss";
import { ISubDayFull, ISubDayVote } from "../api/types";

import { l10n } from "../l10n/l10n";
import { StatusWrapper } from "../statusWrapper";
import { concatStrings } from "../utils/concatStrings";
import { ISubDayState } from "./reducer";

interface ISubDaysRoute {
    channelID: string;
    id: string;
}
interface ISubDayProps extends RouteComponentProps<ISubDaysRoute>, ISubDayState {
    fetchData: (channelID: string, id: string) => void;
    closeSubDay: (channelID: string, id: string) => void;
    pickSubDayWinner: (channelID: string, id: string) => void;
    pickSubDaySubWinner: (channelID: string, id: string) => void;
    pickSubDayNonSubWinner: (channelID: string, id: string) => void;
    pullSubDayWinner: (channelID: string, id: string, user: string) => void;
}

export default class SubDayComponent extends React.PureComponent<ISubDayProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID, this.props.match.params.id);
    }

    public componentDidUpdate(prevProps: ISubDayProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID
            || prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchData(this.props.match.params.channelID, this.props.match.params.id);
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="subday">
                    {this.renderHeader()}
                    {this.renderModPart()}

                    <div className="subday__subheader">
                        {l10n.SUBDAY_VOTES}
                    </div>
                    {this.renderVotes()}
                </div>
            </StatusWrapper>
        );
    }

    private renderVotes = () => {
        const content = this.props.content;
        if (!content) {
            return null;
        }
        return content.votes.map(this.renderVote);
    }

    private renderModPart = () => {
        const content = this.props.content;
        if (!content || content.isMod === false) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="subday__subheader">
                    {l10n.SUBDAY_WINNERS}
                </div>
                <div className="subday__winners">
                    {content.winners.map(this.renderWinner)}
                </div>
                {this.renderButtons()}
            </React.Fragment>
        );
    }

    private renderWinner = (item: ISubDayVote) => {
        const content = this.props.content;
        const userClasses = classnames({
            "subday__winner-user": true,
            "subday__winner-user--sub": content.subsOnly === false && item.isSub === true,
        });
        return (
            <div className="subday__winner" key={item.user}>
                <div className={userClasses}>
                    {item.user}
                </div>
                <div className="subday__winner-game">
                    {item.game}
                </div>
                {this.renderRemoveWinnerButton(item)}
            </div>
        );
    }

    private renderRemoveWinnerButton = (item: ISubDayVote) => {
        const content = this.props.content;
        if (content.isActive === false) {
            return null;
        }

        // TODO: refactor to data-id element
        const remove = () => {
            const id = this.props.content.id;

            this.props.pullSubDayWinner(this.props.channelID, id, item.user);
        };

        return (
            <button type="button" data-id={item.user} onClick={remove}>
                {l10n.SUBDAY_REMOVE_WINNER}
            </button>
        );
    }

    private renderButtons = () => {
        if (!this.props.content || this.props.content.isActive === false) {
            return null;
        }
        return (
            <div className="subday__buttons">
                <button type="button" onClick={this.pickSubDayWinner}>
                    {l10n.SUBDAY_RANDOMIZE_WINNER}
                </button>
                {this.renderExtraButtons()}
                <button type="button" onClick={this.closeSubDay}>
                    {l10n.SUBDAY_CLOSE}
                </button>
            </div>
        );
    }

    private renderExtraButtons = () => {
        if (this.props.content.subsOnly === true) {
            return null;
        }
        return (
            <React.Fragment>
                <button type="button" onClick={this.pickSubDaySubWinner}>
                    {l10n.SUBDAY_RANDOMIZE_WINNER_SUBS}
                </button>
                <button type="button" onClick={this.pickSubDayNonSubWinner}>
                    {l10n.SUBDAY_RANDOMIZE_WINNER_NONSUBS}
                </button>
            </React.Fragment>
        );
    }

    private closeSubDay = () => {
        const id = this.props.content.id;
        this.props.closeSubDay(this.props.channelID, id);
    }
    private pickSubDayWinner = () => {
        const id = this.props.content.id;
        this.props.pickSubDayWinner(this.props.channelID, id);
    }

    private pickSubDaySubWinner = () => {
        const id = this.props.content.id;
        this.props.pickSubDaySubWinner(this.props.channelID, id);
    }

    private pickSubDayNonSubWinner = () => {
        const id = this.props.content.id;
        this.props.pickSubDayNonSubWinner(this.props.channelID, id);
    }

    private renderVote = (item: ISubDayVote) => {
        const content = this.props.content;
        const userClasses = classnames({
            "subday__vote-user": true,
            "subday__vote-user--sub": content.subsOnly === false && item.isSub === true,
        });
        return (
            <div className="subday__vote" key={item.user}>
                <div className={userClasses}>
                    {item.user}
                </div>
                <div className="subday__vote-game">
                    {item.game}
                </div>
            </div>
        );
    }

    private renderHeader = () => {
        const content = this.props.content;
        let subheader = l10n.SUBDAY_IS_ACTIVE;
        if (!content) {
            return null;
        }
        if (content.isActive === false) {
            if (content.closer && content.closer.trim() !== "") {
                subheader = concatStrings(l10n.formatString(l10n.SUBDAY_IS_CLOSED_BY, content.closer));
            } else {
                subheader = l10n.SUBDAY_IS_ACTIVE;
            }
        }
        return (
            <div className="subday__hgroup">
                <div className="subday__header">
                    {content.name}
                </div>
                {subheader}
            </div>
        );
    }

}
