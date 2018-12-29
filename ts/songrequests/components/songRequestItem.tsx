import * as React from "react";
import "../../../scss/modules/_songrequests-item.scss";
import { l10n } from "../../l10n/l10n";
import formatDuration from "../../utils/formatDuration";
import { ISongRequest } from "./../types";

export interface ISongRequestItemProp {
    item: ISongRequest;
    channelID: string;
    isMod: boolean;
    setVideoAsChannelRestricted: (channelID: string, videoID: string) => void;
    bubbleVideoUp: (channelID: string, videoID: string) => void;
    bubbleVideoToSecond: (channelID: string, videoID: string) => void;
    skipVideo: (channelID: string, videoID: string) => void;
}

export class SongRequestItemComponent extends React.PureComponent<ISongRequestItemProp, {}> {
    public render() {
        return (
            <div className="songrequests-item">
                <div className="songrequests-item__header">
                    <a
                        target="_blank"
                        href={`https://youtu.be/${this.props.item.videoID}`}
                        className="songrequests-item__title"
                    >
                        <span className="songrequests-item__order">{this.props.item.order}</span>
                        <span>
                            {this.props.item.title} [{formatDuration(this.props.item.length / 1000000000)}]
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
        if (this.props.isMod === true) {
            return (
                <div className="songrequests-item__buttons">
                    {this.renderPlayNowButton()}
                    {this.renderPlayNextButton()}
                    <button type="button" onClick={this.skipVideo} className="songrequests-item__delete-button">
                        {l10n.SONGREQUESTS_DELETE}
                    </button>
                    <button type="button" onClick={this.banVideo} className="songrequests-item__ban-button">
                        {l10n.SONGREQUESTS_BAN}
                    </button>
                </div>
            );
        }
    }

    private renderPlayNowButton = () => {
        if (this.props.item.order === 1) {
            return;
        }
        return (
            <button type="button" onClick={this.playNow} className="songrequests-item__play-button">
                {l10n.SONGREQUESTS_PLAY_NOW}
            </button>
        );
    }

    private renderPlayNextButton = () => {
        if (this.props.item.order === 1 || this.props.item.order === 2) {
            return;
        }
        return (
            <button type="button" onClick={this.playNext} className="songrequests-item__play-next-button">
                {l10n.SONGREQUESTS_PLAY_NEXT}
            </button>
        );
    }

    private skipVideo = () => {
        this.props.skipVideo(this.props.channelID, this.props.item.videoID);
    }

    private banVideo = () => {
        this.props.setVideoAsChannelRestricted(this.props.channelID, this.props.item.videoID);
    }

    private playNow = () => {
        this.props.bubbleVideoUp(this.props.channelID, this.props.item.videoID);
    }

    private playNext = () => {
        this.props.bubbleVideoToSecond(this.props.channelID, this.props.item.videoID);
    }
}
