import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import UserLogsComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.userLogs;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, userID: string) => dispatch(actions.get(channelID, userID)),
        reset: () => dispatch(actions.reset),
    };
};

const UserLogs = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserLogsComponent);

export default UserLogs;
