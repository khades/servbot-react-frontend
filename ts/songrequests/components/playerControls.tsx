import * as React from "react";
import "../../../scss/modules/_player-controls.scss";
import formatDuration from "../../utils/formatDuration";
import { IYoutubeVideoTiming } from "../../utils/YoutubePlayer";
import { ISongRequest } from "./../types";

export interface IPlayerControlsProps {
    volume: number;
    setVolume: (volume: number) => void;
    saveVolume: () => void;
    getTrackDuration: () => IYoutubeVideoTiming;
    seekTo: (value: number) => void;
    paused: boolean;
    pause: () => void;
    unpause: () => void;
    currentTrack?: ISongRequest;
}

interface IPlayerControlsState {
    duration: number;
    currentValue: number;
    seekerDuration: number;
    seekerValue: number;
    seekerIsPicked: boolean;
    infoValue?: string;
}

export class PlayerControlsComponent extends React.PureComponent<IPlayerControlsProps, IPlayerControlsState> {
    private timer: number = -1;
    constructor(props: IPlayerControlsProps) {
        super(props);
        const trackduration = this.props.getTrackDuration();
        this.state = {
            currentValue: trackduration.currentTime,
            duration: trackduration.duration,
            seekerDuration: trackduration.duration * 100 || 1,
            seekerIsPicked: false,
            seekerValue: trackduration.currentTime * 100 || 0,
        };

    }

    public componentDidMount() {
        this.timer = window.setInterval(this.processSeeker, 500);
    }

    public componentWillUnmount() {
        if (this.timer !== -1) {
            window.clearInterval(this.timer);
        }
    }

    public render() {
        return (
            <div className="player-controls">
                <input
                    type="range"
                    onChange={this.onSeekerChange}
                    onMouseUp={this.onMouseUp}
                    onTouchEnd={this.onMouseUp}
                    className="player-controls__seeker"
                    min={0}
                    max={this.state.seekerDuration}
                    value={this.state.seekerValue}
                />
                <div className="player-controls__song-info">
                    {this.renderPauseButton()}
                    {this.renderUnpauseButton()}
                    {this.renderTrackInfo()}
                </div>
                {this.renderVolumeInput()}

            </div>
        );
    }
    private renderPauseButton = () => {
        if (this.props.paused === true) {
            return null;
        }
        return <div className="player-controls__pause-button" onClick={this.props.pause} />;
    }
    private renderUnpauseButton = () => {
        if (this.props.paused === false) {
            return null;
        }
        return <div className="player-controls__play-button" onClick={this.props.unpause} />;
    }
    private renderVolumeInput = () => {
        if (!this.props.currentTrack) {
            return null;
        }
        return (
            <div className="player-controls__volume-control">
                <div className="player-controls__volume-control-icon" />
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={this.props.volume}
                    onChange={this.onVolumeChange}
                    onMouseUp={this.props.saveVolume}
                    onTouchEnd={this.props.saveVolume}
                />
            </div>

        );
    }
    // private onSeekerPick = () => {
    //     console.log("OnInput");
    //     // this.setState({ seekerIsPicked: true });
    // }
    private renderTrackInfo = () => {
        if (!this.props.currentTrack) {
            return null;
        }
        return (
            <div className="player-controls__label">
                <div className="player-controls__upper-part">
                    <div className="player-controls__title">
                        {this.props.currentTrack.title}
                    </div>
                    <div>
                        {this.state.infoValue}
                    </div>
                </div>
                <div className="player-controls__user">
                    @{this.props.currentTrack.user}
                </div>
            </div>
        );
    }
    private onSeekerChange = (input: React.FormEvent<HTMLInputElement>) => {
        this.setState({ seekerValue: parseInt(input.currentTarget.value, 10), seekerIsPicked: true });
    }

    private onVolumeChange = (input: React.FormEvent<HTMLInputElement>) => {
       this.props.setVolume(parseInt(input.currentTarget.value, 10));
    }

    private onMouseUp = () => {
        this.setState({ seekerIsPicked: false });
        this.props.seekTo(Math.floor(this.state.seekerValue / 100));
    }

    private processSeeker = () => {
        if (this.state.seekerIsPicked === true) {
            return;
        }
        const trackduration = this.props.getTrackDuration();
        this.setState({
            currentValue: trackduration.currentTime,
            duration: trackduration.duration,
            infoValue: `${formatDuration(trackduration.currentTime)}/${formatDuration(trackduration.duration)}`,
            seekerDuration: trackduration.duration * 100 || 1,
            seekerValue: trackduration.currentTime * 100 || 0,
        });
    }
}
