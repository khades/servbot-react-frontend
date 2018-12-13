import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as notificationActions from "../notifications/actioncreators";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelUsersComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.channelUsers;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, username?: string) => dispatch(actions.get(channelID, username)),
        reset: () => dispatch(actions.reset),
        showNotification: (body: string) => dispatch(notificationActions.add(body, "templates")),
    };
};

const ChannelUsers = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelUsersComponent);

export default ChannelUsers;
