import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "./actioncreators";
import Notifications from "./component";
import { IStore } from "../reducers";

const mapStateToProps = (state: IStore) => {
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
