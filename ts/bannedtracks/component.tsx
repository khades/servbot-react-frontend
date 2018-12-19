import * as React from "react";
import "../../scss/modules/_songrequests-library.scss";
import Paginator from "../basicComponents/paginator";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import StatusWrapper from "../statusWrapper/container";
import BannedTrackComponent from "./components/BannedTrack";
import { IBannedTracksState } from "./reducer";
import { IVideoLibraryItem } from "./types";

export interface IBannedTracksOwnProps {
    routeChannelID: string;
}

export interface IBannedTracksDispatchedProps {
    fetchData: (channelID: string, page: number, init: boolean) => void;
    unbanVideo: (channelID: string, videoID: string, title: string, page: number) => void;
    reset: () => void;
}

export type IBannedTracksProps = IBannedTracksOwnProps & IBannedTracksState & IBannedTracksDispatchedProps;

export default class BannedTracksComponent extends React.PureComponent<IBannedTracksProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.routeChannelID, 1, true);
    }

    public componentDidUpdate(prevProps: IBannedTracksProps) {
        if (prevProps.routeChannelID !== this.props.routeChannelID) {
            this.props.fetchData(this.props.routeChannelID, 1, true);
        }
    }

    public componentWillUnmount() {
        this.props.reset();
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="songrequests-library">
                    <div className="songrequests-library__header">
                        {l10n.SONGREQUESTS_BANNED_TRACKS}
                    </div>
                    <div className="songrequests-library__items">
                        {this.renderItems()}
                    </div>
                    {this.renderPaginator()}
                </div>
            </StatusWrapper>
        );
    }
    private renderPaginator = () => {
        if (!this.props.content) {
            return;
        }
        const pages = Math.ceil(this.props.content.count / 25);
        return (
            <Paginator
                pages={pages}
                page={this.props.page}
                setPage={this.setPage}
            />
        );
    }

    private renderItems = () => {
        if (!this.props.content) {
            return;
        }
        return this.props.content.items.map(this.renderItem);
    }

    private renderItem = (item: IVideoLibraryItem) => {
        return (
            <BannedTrackComponent
                key={item.videoID}
                item={item}
                unban={this.unbanVideo}
                channelID={this.props.routeChannelID}
            />
        );
    }

    private setPage = (page: number) => {
        this.props.fetchData(this.props.routeChannelID, page, false);
    }

    private unbanVideo = (videoID: string, title: string) => {
        this.props.unbanVideo(this.props.routeChannelID, videoID, title, this.props.page);
    }
}
