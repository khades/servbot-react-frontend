import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelUsers from "./component";

const mapStateToProps = (state: IStore) => {
    return state.channelUsers;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, username?: string) => dispatch(actions.get(channelID, username)),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelUsers);

export default VisibleNotifications;
