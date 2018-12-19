import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import BannedTracksComponent, { IBannedTracksDispatchedProps, IBannedTracksOwnProps} from "./component";
import { IBannedTracksState } from "./reducer";

const mapStateToProps = (state: IStore, ownProps: IBannedTracksOwnProps): IBannedTracksState => {
    return state.BannedTracks;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IBannedTracksOwnProps): IBannedTracksDispatchedProps => {
    return {
        fetchData: (channelID: string, page: number, init: boolean) => dispatch(actions.get(channelID, page, init)),
        reset: () => dispatch(actions.reset),
        unbanVideo: (channelID: string, videoID: string, title: string, page: number) =>
            dispatch(actions.unbanVideo(channelID, videoID, title, page)),
    };
};

const BannedTracks = connect<IBannedTracksState, IBannedTracksDispatchedProps, IBannedTracksOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(BannedTracksComponent);

export default BannedTracks;
