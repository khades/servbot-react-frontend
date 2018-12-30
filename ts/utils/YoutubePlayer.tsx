import * as React from "react";
import "../../scss/modules/_youtube-player.scss";

export interface IYoutubePlayerProps {
    onRestricted?: (id: string) => void;
    onError?: (id: string) => void;
    onEnd?: (id: string) => void;
    onReady?: () => void;
    volume: number;
    video: string;
    paused?: boolean;
}

export interface IYoutubeVideoTiming {
    currentTime: number;
    duration: number;
}

export class YoutubePlayerComponent extends React.Component<IYoutubePlayerProps, {}> {
    private playerRef: React.RefObject<HTMLDivElement> = React.createRef();
    private player: YT.Player;
    private ready: boolean = false;
    public seekTo = (seconds: number) => {
        if (this.player) {
            this.player.seekTo(seconds, true);
        }
    }

    public getTime = (): IYoutubeVideoTiming => {
        if (this.player) {
            return {
                currentTime: this.player.getCurrentTime(),
                duration: this.player.getDuration(),
            };
        }
        return {
            currentTime: 0,
            duration: 0,
        };
    }

    public componentDidUpdate(prevProps: IYoutubePlayerProps) {
        if (!this.player || this.ready === false) {
            return;
        }
        if (prevProps.video !== this.props.video && this.props.video === null) {
            this.player.stopVideo();
        }

        if (prevProps.video !== this.props.video && !!this.props.video) {
            this.player.loadVideoById(this.props.video, 0);
            this.player.seekTo(0, true);
            if (this.props.paused === true) {
                this.player.pauseVideo();
            }
        }

        if (prevProps.volume !== this.props.volume) {
            this.player.setVolume(this.props.volume);
        }

        if (prevProps.paused !== this.props.paused && this.props.paused === true) {
            this.player.pauseVideo();
        }

        if (prevProps.paused !== this.props.paused && this.props.paused === false) {
            this.player.playVideo();
        }
    }

    public componentDidMount() {
        const scripts = document.getElementsByTagName("script");
        const hasYoutubeIFrameAPI = Array.prototype.some.call(
            scripts,
            (item: any) => item.src === "https://www.youtube.com/player_api");
        if (hasYoutubeIFrameAPI === true) {
            this.createPlayer();
        } else {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/player_api";

            const firstScriptTag = scripts[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            // THIS is fine
            // @ts-ignore
            window.onYouTubePlayerAPIReady = this.createPlayer;
        }
    }

    public render() {
        return (
            <div
                className="youtube-player"
                ref={this.playerRef}
            />
        );
    }

    private onPlayerReady = () => {
        this.ready = true;
        this.player.setVolume(this.props.volume);
        if (!!this.props.video) {
            this.player.loadVideoById(this.props.video, 0);
            this.player.seekTo(0, true);
            if (this.props.paused === true) {
                this.player.pauseVideo();
            }
        }
        if (!!this.props.onReady) {
            this.props.onReady();
        }

    }
    private createPlayer = () => {
        // THIS is fine
        // @ts-ignore
        this.player = new YT.Player(this.playerRef.current, {
            events: {
                onError: this.onError,
                onReady: this.onPlayerReady,
                onStateChange: this.onPlayerStateChange,
            },
            playerVars: {
                controls: 0,
                disablekb: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                vq: "large",
            },
        });

    }
    private onError = (event: YT.OnErrorEvent) => {
        if (event.data === YT.PlayerError.VideoNotFound
            || event.data === YT.PlayerError.EmbeddingNotAllowed
            || event.data === YT.PlayerError.EmbeddingNotAllowed2) {
            this.props.onRestricted(this.props.video);
        } else {
            this.props.onError(this.props.video);
        }
    }

    private onPlayerStateChange = () => {
        if (this.player.getPlayerState() === YT.PlayerState.ENDED) {
            this.props.onEnd(this.props.video);
        }
    }
}
