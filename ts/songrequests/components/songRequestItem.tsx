import * as React from "react";
import "../../../scss/modules/_songrequests-item.scss";
import { l10n } from "../../l10n/l10n";
import formatDuration from "../../utils/formatDuration";
import { ISongRequest } from "./../types";

export interface ISongRequestItemProp {
    item: ISongRequest;
}

export class SongRequestItemComponent extends React.PureComponent<ISongRequestItemProp, {}> {
    public render() {
        return (
            <div className="songrequests-item">
                <div className="songrequests-item__header">
                    <a className="songrequests-item__title">
                        <span className="songrequests-item__order">{this.props.item.order}</span>
                        <span>
                            {this.props.item.title}
                            [{formatDuration(this.props.item.length / 1000000000)}]
                    </span>
                    </a>
                    <div className="songrequests-item__user">
                        @{this.props.item.user}
                    </div>
                </div>
                {this.renderButtons()}
            </div>
        );
    }

    private renderButtons = () => {
        return (
            <div className="songrequests-item__buttons">
                {this.renderPlayNowButton()}
                {this.renderPlayNextButton()}
                <button type="button" className="songrequests-item__delete-button">
                    {l10n.SONGREQUESTS_DELETE}
                </button>
                <button type="button" className="songrequests-item__ban-button">
                    {l10n.SONGREQUESTS_BAN}
                </button>
            </div>
        );
    }

    private renderPlayNowButton = () => {
        if (this.props.item.order === 1) {
            return;
        }
        return (
            <button type="button" className="songrequests-item__play-button">
                {l10n.SONGREQUESTS_PLAY_NOW}
            </button>
        );
    }

    private renderPlayNextButton = () => {
        if (this.props.item.order === 1 || this.props.item.order === 2) {
            return;
        }
        return (
            <button type="button" className="songrequests-item__play-next-button">
                {l10n.SONGREQUESTS_PLAY_NEXT}
            </button>
        );
    }
}
