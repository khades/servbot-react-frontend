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

function propsAreEqual(prevProps: IBannedTrackProps, props: IBannedTrackProps) {
    return prevProps.item.videoID === props.item.videoID;
}

const BannedTrackComponent = React.memo((props: IBannedTrackProps) => {
    let banIssuer = "";
    const channelTag = `${props.channelID}-restricted`;
    props.item.tags.some((f) => {
        if (f.tag === channelTag) {
            banIssuer = f.user;
            return true;
        }
        return false;
    });

    const unbanVideo = () => {
        props.unban(props.item.videoID, props.item.title);
    };

    return (
        <div className="songrequests-library-item">
            <div className="songrequests-library-item__header">
                <a
                    target="_blank"
                    className="songrequests-library-item__title"
                    href={`https://youtu.be/${props.item.videoID}`}
                >
                    {props.item.title} — {formatDuration(props.item.length / 1000000000)}
                </a>
                <div className="songrequests-library-item__ban-issuer">
                    @{banIssuer}
                </div>
            </div>
            <div className="songrequests-library-item__footer">
                <button
                    type="button"
                    onClick={unbanVideo}
                    className="songrequests-library-item__unban"
                >
                    {l10n.SONGREQUESTS_UNBAN_TRACK}
                </button>
            </div>
        </div>
    );

}, propsAreEqual);

export default BannedTrackComponent;
