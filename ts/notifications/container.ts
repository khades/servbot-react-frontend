import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "./actioncreators";
import { NotificationsActions } from "./actions";
import Notifications from "./component";
import { INotification } from "./reducer";

const mapStateToProps = (state) => {
    return {
        getNotifications: () => state.notifications,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        hideNotification: (id: string) => dispatch(actions.hide(id)),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notifications);

export default VisibleNotifications;
