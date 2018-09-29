import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelUsersComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.channelUsers;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, username?: string) => dispatch(actions.get(channelID, username)),
    };
};

const ChannelUsers = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelUsersComponent);

export default ChannelUsers;
