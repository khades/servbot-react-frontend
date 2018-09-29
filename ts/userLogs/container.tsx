import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import UserLogs from "./component";

const mapStateToProps = (state: IStore) => {
    return state.userLogs;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, userID: string) => dispatch(actions.get(channelID, userID)),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserLogs);

export default VisibleNotifications;
