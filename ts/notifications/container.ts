import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import NotificationsComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return {
        notifications:  state.notifications,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        hideNotification: (id: string) => dispatch(actions.hide(id)),
    };
};

const Notifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationsComponent);

export default Notifications;
