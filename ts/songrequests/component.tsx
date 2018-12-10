import classnames from "classnames";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_songrequests.scss";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import States from "../utils/states";
import { YoutubePlayerComponent as YoutubePlayer } from "../utils/YoutubePlayer";
import { PlayerControlsComponent } from "./components/playerControls";
import { SongRequestItemComponent } from "./components/songRequestItem";
import { ISongRequestsState } from "./reducer";
import { ISongRequest } from "./types";

interface ISongRequestsProps extends RouteComponentProps<IChannelRoute>, ISongRequestsState {
    fetchData: (channelID: string) => void;
    saveVolume: (channelID: string, volume: number) => void;
}

export enum songRequestsPanels {
    BANNEDTRACKS,
    SETTINGS,
    PLAYLIST,
}

interface ISongRequestsComponentState {
    paused: boolean;
    volume: number;
    ready: boolean;
    shownPanel: songRequestsPanels;
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
            shownPanel: songRequestsPanels.PLAYLIST,
            volume: 0,
        };
    }

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ISongRequestsProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.setState({ shownPanel: songRequestsPanels.PLAYLIST });
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
                    </div>
                    {this.renderPlayer()}
                    {this.renderPlayerControls()}
                    {this.renderRequests()}
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
            "songrequests__player-container--hidden": this.state.shownPanel !== songRequestsPanels.PLAYLIST,
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

    private renderRequests = () => {
        if (!this.props.content) {
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

    private goToPlaylist = () => {
        this.setState({ shownPanel: songRequestsPanels.PLAYLIST });
    }

    private goToBannedTracks = () => {
        this.setState({ shownPanel: songRequestsPanels.BANNEDTRACKS });
    }

    private goToSettings = () => {
        this.setState({ shownPanel: songRequestsPanels.SETTINGS });
    }

    private saveVolume = () => {
        this.props.saveVolume(this.props.match.params.channelID, this.state.volume);
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
