import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SongRequestsComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.SongRequests;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        saveVolume: (channelID: string, volume: number) => dispatch(actions.saveVolume(channelID, volume)),
    };
};

const SongRequests = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongRequestsComponent);

export default SongRequests;
