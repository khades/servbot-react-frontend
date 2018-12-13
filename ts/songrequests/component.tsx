import classnames from "classnames";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_songrequests.scss";
import BannedTracks from "../bannedtracks/container";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import States from "../utils/states";
import { YoutubePlayerComponent as YoutubePlayer } from "../utils/YoutubePlayer";
import { PlayerControlsComponent } from "./components/playerControls";
import { SettingsComponent } from "./components/settings";
import { SongRequestItemComponent } from "./components/songRequestItem";
import { ISongRequestsState, songRequestsPanels } from "./reducer";
import { ISongRequest, ISongRequestsSettings } from "./types";

export interface ISongRequestsProps extends RouteComponentProps<IChannelRoute>, ISongRequestsState {
    fetchData: (channelID: string) => void;
    saveVolume: (channelID: string, volume: number) => void;
    goToBannedTracks: () => void;
    goToPlaylist: () => void;
    goToSettings: () => void;
    setVideoAsYoutubeRestricted: (channelID: string, videoID: string) => void;
    setVideoAsTwitchRestricted: (channelID: string, videoID: string) => void;
    setVideoAsChannelRestricted: (channelID: string, videoID: string) => void;
    bubbleVideoUp: (channelID: string, videoID: string) => void;
    bubbleVideoToSecond: (channelID: string, videoID: string) => void;
    skipVideo: (channelID: string, videoID: string) => void;
    saveSettings: (channelID: string, content: ISongRequestsSettings) => void;
}

interface ISongRequestsComponentState {
    paused: boolean;
    volume: number;
    ready: boolean;
}

export default class SongRequestsComponent extends React.PureComponent<
    ISongRequestsProps,
    ISongRequestsComponentState
    > {
    private playerRef: React.RefObject<YoutubePlayer> = React.createRef();

    constructor(props: ISongRequestsProps) {
        super(props);
        this.state = {
            paused: false,
            ready: false,
            volume: 0,
        };
    }

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ISongRequestsProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
        if (prevProps.state !== States.READY && this.props.state === States.READY) {
            this.setState({ volume: this.props.content.settings.volume });
        }
    }

    public render() {
        const songrequestsClasses = classnames({
            "songrequests": true,
            "songrequests--noplayer": !this.props.content || this.props.content.isOwner === false,
        });
        return (
            <StatusWrapper state={this.props.state}>
                <div className={songrequestsClasses}>
                    <div className="songrequests__hgroup">
                        <div className="songrequests__header">
                            {l10n.formatString(l10n.SONGREQUESTS_TITLE, this.renderChannelName())}
                        </div>
                        {this.renderHeaderButtons()}
                    </div>
                    {this.renderPlayer()}
                    {this.renderPlayerControls()}
                    {this.renderRequests()}
                    {this.renderBannedTracks()}
                    {this.renderSettings()}
                </div>
            </StatusWrapper>
        );
    }

    private renderPlayer = () => {
        if (!this.props.content || this.props.content.isOwner === false) {
            return null;
        }

        const video = !!this.props.currentTrack ? this.props.currentTrack.videoID : null;
        const containerClasses = classnames({
            "songrequests__player-container": true,
            "songrequests__player-container--hidden": this.props.shownPanel !== songRequestsPanels.PLAYLIST,
        });
        return (
            <div className={containerClasses}>
                <YoutubePlayer
                    ref={this.playerRef}
                    video={video}
                    volume={this.state.volume}
                    paused={this.state.paused}
                    onReady={this.onPlayerReady}
                />
            </div>
        );
    }
    private renderSettings = () => {
        if (!this.props.content || this.props.shownPanel !== songRequestsPanels.SETTINGS) {
            return;
        }
        return (
            <SettingsComponent
                content={this.props.content.settings}
                save={this.saveSettings}
            />
        );
    }
    private renderBannedTracks = () => {
        if (!this.props.content || this.props.shownPanel !== songRequestsPanels.BANNEDTRACKS) {
            return;
        }
        return (
            <BannedTracks
                routeChannelID={this.props.match.params.channelID}
            />
        );
    }
    private renderPlayerControls = () => {
        if (this.state.ready === false || !this.props.content || this.props.content.isOwner === false) {
            return null;
        }
        return (
            <PlayerControlsComponent
                getTrackDuration={this.playerRef.current.getTime}
                seekTo={this.playerRef.current.seekTo}
                pause={this.pause}
                unpause={this.unpause}
                paused={this.state.paused}
                volume={this.state.volume}
                setVolume={this.setVolume}
                currentTrack={this.props.currentTrack}
                saveVolume={this.saveVolume}
            />
        );
    }

    private renderHeaderButtons = () => {
        if (!this.props.content || (this.props.content.isMod === false && this.props.content.isOwner === false)) {
            return;
        }
        return (
            <div className="songrequests__buttons">
                {this.renderGoToBannedTracks()}
                {this.renderGoToSettings()}
                {this.renderGoToPlaylist()}
            </div>
        );
    }

    private renderGoToPlaylist = () => {
        if (this.props.shownPanel === songRequestsPanels.PLAYLIST) {
            return;
        }
        return (
            <button type="button" onClick={this.props.goToPlaylist}>
                {l10n.SONGREQUESTS_RETURN_TO_PLAYLIST}
            </button>
        );
    }

    private renderGoToSettings = () => {
        if (this.props.shownPanel === songRequestsPanels.SETTINGS) {
            return;
        }
        return (
            <button type="button" onClick={this.props.goToSettings}>
                {l10n.SONGREQUESTS_SHOW_SETTINGS}
            </button>
        );
    }

    private renderGoToBannedTracks = () => {
        if (this.props.shownPanel === songRequestsPanels.BANNEDTRACKS) {
            return;
        }
        return (
            <button type="button" onClick={this.props.goToBannedTracks}>
                {l10n.SONGREQUESTS_SHOW_BANNED_TRACKS}
            </button>
        );
    }

    private renderRequests = () => {
        if (!this.props.content || this.props.shownPanel !== songRequestsPanels.PLAYLIST) {
            return null;
        }
        return (
            <div className="songrequests__requests">
                {this.props.content.requests.map(this.renderItem)}
            </div>
        );
    }

    private renderItem = (item: ISongRequest) => {
        return (
            <SongRequestItemComponent
                channelID={this.props.match.params.channelID}
                setVideoAsChannelRestricted={this.props.setVideoAsChannelRestricted}
                bubbleVideoUp={this.props.bubbleVideoUp}
                bubbleVideoToSecond={this.props.bubbleVideoToSecond}
                skipVideo={this.props.skipVideo}
                key={item.date}
                item={item}
            />
        );
    }

    private pause = () => {
        this.setState({ paused: true });
    }

    private onPlayerReady = () => {
        this.setState({ ready: true });
    }

    private unpause = () => {
        this.setState({ paused: false });
    }

    private setVolume = (volume: number) => {
        this.setState({ volume });
    }

    private saveVolume = () => {
        this.props.saveVolume(this.props.match.params.channelID, this.state.volume);
    }

    private saveSettings = (content: ISongRequestsSettings) => {
        this.props.saveSettings(this.props.match.params.channelID, content);
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
