import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import Notifications from "./component";

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

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notifications);

export default VisibleNotifications;
