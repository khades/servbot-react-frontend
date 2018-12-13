import * as React from "react";
import Checkbox from "../../basicComponents/checkbox";
import NumericInput from "../../basicComponents/numericInput";
import { l10n } from "../../l10n/l10n";
import formatDuration from "../../utils/formatDuration";
import { ISongRequestsSettings } from "../types";

interface ISettingsComponentProps {
    content: ISongRequestsSettings;
    save: (content: ISongRequestsSettings) => void;
}

export class SettingsComponent extends React.PureComponent<ISettingsComponentProps, ISongRequestsSettings> {
    constructor(props: ISettingsComponentProps) {
        super(props);
        this.state = this.props.content;
    }
    public render() {
        return (
            <div className="songrequests__settings">
                <Checkbox
                    label={l10n.SONGREQUESTS_SUBS_ONLY}
                    id="onlySubs"
                    value={this.state.onlySubs}
                    setValue={this.setOnlySubs}
                />
                <NumericInput
                    label={l10n.SONGREQUESTS_PLAYLIST_LENGTH}
                    id="playlistLength"
                    value={this.state.playlistLength}
                    setValue={this.setPlaylistLength}
                />
                <NumericInput
                    label={l10n.SONGREQUESTS_MIN_VIDEO_LENGTH}
                    id="minVideoLength"
                    value={this.state.minVideoLength}
                    setValue={this.setMinVideoLength}
                />
                <div className="songrequests__human-readable-duration">
                    {l10n.HUMAN_READABLE_DURATION}: {formatDuration(this.state.minVideoLength)}
                </div>
                <NumericInput
                    label={l10n.SONGREQUESTS_MAX_VIDEO_LENGTH}
                    id="maxVideoLength"
                    value={this.state.maxVideoLength}
                    setValue={this.setMaxVideoLength}
                />
                <div className="songrequests__human-readable-duration">
                    {l10n.HUMAN_READABLE_DURATION}: {formatDuration(this.state.maxVideoLength)}
                </div>
                <NumericInput
                    label={l10n.SONGREQUESTS_MAX_REQUESTS_PER_USER}
                    id="maxRequestsPerUser"
                    value={this.state.maxRequestsPerUser}
                    setValue={this.setMaxRequestsPerUser}
                />
                <NumericInput
                    label={l10n.SONGREQUESTS_MINIMAL_AMOUNT_OF_VIEWS}
                    id="videoViewLimit"
                    value={this.state.videoViewLimit}
                    setValue={this.setVideoViewLimit}
                />
                <Checkbox
                    label={l10n.SONGREQUESTS_MORE_LIKES_THAN_DISLIKES}
                    id="moreLikes"
                    value={this.state.moreLikes}
                    setValue={this.setMoreLikes}
                />
                <Checkbox
                    label={l10n.SONGREQUESTS_ALLOW_OFFLINE}
                    id="allowOffline"
                    value={this.state.allowOffline}
                    setValue={this.setAllowOffline}
                />
                <button type="button" onClick={this.save}>
                    {l10n.SAVE}
                </button>
            </div>
        );
    }

    private save = () => {
        this.props.save(this.state);
    }

    private setAllowOffline = (value: boolean) => {
        this.setState({ allowOffline: value });
    }

    private setMoreLikes = (value: boolean) => {
        this.setState({ moreLikes: value });
    }

    private setVideoViewLimit = (value: number) => {
        this.setState({ videoViewLimit: value });
    }

    private setMaxRequestsPerUser = (value: number) => {
        this.setState({ maxRequestsPerUser: value });
    }

    private setMinVideoLength = (value: number) => {
        this.setState({ minVideoLength: value });
    }

    private setMaxVideoLength = (value: number) => {
        this.setState({ maxVideoLength: value });
    }

    private setPlaylistLength = (value: number) => {
        this.setState({ playlistLength: value });
    }

    private setOnlySubs = (value: boolean) => {
        this.setState({ onlySubs: value });
    }
}
