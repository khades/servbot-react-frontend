import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import UserLogsComponent, { IUserLogsDispatchProps, IUserLogsOwnProps } from "./component";
import { IUserLogsState } from "./reducer";

const mapStateToProps = (state: IStore, ownProps: IUserLogsOwnProps): IUserLogsState => {
    return state.UserLogs;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IUserLogsOwnProps): IUserLogsDispatchProps => {
    return {
        fetchData: (channelID: string, userID: string) => dispatch(actions.get(channelID, userID)),
        reset: () => dispatch(actions.reset),
    };
};

const UserLogs = connect<IUserLogsState, IUserLogsDispatchProps, IUserLogsOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(UserLogsComponent);

export default UserLogs;
