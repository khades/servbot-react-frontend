import * as React from "react";
import "../../../scss/modules/_songrequests-library-item.scss";
import { l10n } from "../../l10n/l10n";
import formatDuration from "../../utils/formatDuration";
import { IVideoLibraryItem } from "../types";

interface IBannedTrackProps {
    item: IVideoLibraryItem;
    channelID: string;
    unban: (videoID: string, title: string) => void;
}

interface IBannedTrackState {
    banIssuer: string;
}

export class BannedTrackComponent extends React.PureComponent<IBannedTrackProps, IBannedTrackState> {
    constructor(props: IBannedTrackProps) {
        super(props);
        let banIssuer = "";
        const channelTag = `${this.props.channelID}-restricted`;
        this.props.item.tags.some((f) => {
            if (f.tag === channelTag) {
                banIssuer = f.user;
                return true;
            }
            return false;
        });
        this.state = { banIssuer };

    }

    public componentDidUpdate(prevProps: IBannedTrackProps) {
        if (prevProps.item.videoID !== this.props.item.videoID) {
            let banIssuer = "";
            const channelTag = `${this.props.channelID}-restricted`;
            this.props.item.tags.some((f) => {
                if (f.tag === channelTag) {
                    banIssuer = f.user;
                    return true;
                }
                return false;
            });
            this.setState({ banIssuer });
        }
    }

    public render() {
        return (
            <div className="songrequests-library-item">
                <div className="songrequests-library-item__header">
                    <a
                        target="_blank"
                        className="songrequests-library-item__title"
                        href={`https://youtu.be/${this.props.item.videoID}`}
                    >
                        {this.props.item.title} — {formatDuration(this.props.item.length / 1000000000)}
                    </a>
                    <div className="songrequests-library-item__ban-issuer">
                        @{this.state.banIssuer}
                    </div>
                </div>
                <div className="songrequests-library-item__footer">
                    <button
                        type="button"
                        onClick={this.unbanVideo}
                        className="songrequests-library-item__unban"
                    >
                        {l10n.SONGREQUESTS_UNBAN_TRACK}
                    </button>
                </div>
            </div>
        );
    }
    private unbanVideo = () => {
        this.props.unban(this.props.item.videoID, this.props.item.title);
    }
}
