import { connect } from "react-redux";
import * as actions from "./actioncreators";
import Notifications from "./component";
import reducer from "./reducer";

const mapStateToProps = (state) => {
    return {
        getNotifications: () => state.notifications,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideNotification: (id: string) => dispatch(actions.hide(id)),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notifications);

export default VisibleNotifications;
