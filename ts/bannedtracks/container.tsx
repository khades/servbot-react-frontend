import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import BannedTracksComponent, { IBannedTracksProps } from "./component";
import { IBannedTracksState } from "./reducer";

export interface IBannedTracksContainerProps {
    routeChannelID: string;
}

interface IBannedTracksDispatchedProps {
    fetchData: (channelID: string, page: number, init: boolean) => void;
    unbanVideo: (channelID: string, videoID: string, title: string) => void;
}

const mapStateToProps = (state: IStore) => {
    return state.BannedTracks;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IBannedTracksProps) => {
    return {
        fetchData: (channelID: string, page: number, init: boolean) => dispatch(actions.get(channelID, page, init)),
        unbanVideo: (channelID: string, videoID: string, title: string) =>
            dispatch(actions.unbanVideo(channelID, videoID, title, ownProps.page)),
    };
};

const BannedTracks = connect<IBannedTracksState, IBannedTracksDispatchedProps, IBannedTracksContainerProps>(
    mapStateToProps,
    mapDispatchToProps,
)(BannedTracksComponent);

export default BannedTracks;
