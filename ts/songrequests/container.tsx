import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as notificationActions from "../notifications/actioncreators";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SongRequestsComponent from "./component";
import { ISongRequestsSettings } from "./types";

const mapStateToProps = (state: IStore) => {
    return state.SongRequests;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addNotification: (body: string) => dispatch(notificationActions.add(body)),
        bubbleVideoToSecond: (channelID: string, videoID: string) =>
            dispatch(actions.bubbleVideoToSecond(channelID, videoID)),
        bubbleVideoUp: (channelID: string, videoID: string) => dispatch(actions.bubbleVideoUp(channelID, videoID)),

        fetchData: (channelID: string) => dispatch(actions.get(channelID, true)),
        updateData: (channelID: string) => dispatch(actions.get(channelID, false)),

        goToBannedTracks: () => dispatch(actions.goToBannedTracks),
        goToPlaylist: () => dispatch(actions.goToPlaylist),
        goToSettings: () => dispatch(actions.goToSettings),
        saveSettings: (channelID: string, content: ISongRequestsSettings) => dispatch(actions.save(channelID, content)),
        saveVolume: (channelID: string, volume: number) => dispatch(actions.saveVolume(channelID, volume)),

        setVideoAsChannelRestricted: (channelID: string, videoID: string) =>
            dispatch(actions.setVideoAsChannelRestricted(channelID, videoID)),
        setVideoAsTwitchRestricted: (channelID: string, videoID: string) =>
            dispatch(actions.setVideoAsTwitchRestricted(channelID, videoID)),
        setVideoAsYoutubeRestricted: (channelID: string, videoID: string) =>
            dispatch(actions.setVideoAsYoutubeRestricted(channelID, videoID)),

        skipVideo: (channelID: string, videoID: string) => dispatch(actions.skipVideo(channelID, videoID)),
    };
};

const SongRequests = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongRequestsComponent);

export default SongRequests;
