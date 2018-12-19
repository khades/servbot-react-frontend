import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as notificationActions from "../notifications/actioncreators";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelUsersComponent, { IChannelUsersDispatchedProps, IChannelUsersOwnProps } from "./component";
import { IChannelUsersState } from "./reducer";

const mapStateToProps = (state: IStore, ownProps: IChannelUsersOwnProps): IChannelUsersState => {
    return state.ChannelUsers;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IChannelUsersOwnProps): IChannelUsersDispatchedProps => {
    return {
        fetchData: (channelID: string, username?: string) => dispatch(actions.get(channelID, username)),
        reset: () => dispatch(actions.reset),
        showNotification: (body: string) => dispatch(notificationActions.add(body, "templates")),
    };
};

const ChannelUsers = connect<IChannelUsersState, IChannelUsersDispatchedProps, IChannelUsersOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelUsersComponent);

export default ChannelUsers;
