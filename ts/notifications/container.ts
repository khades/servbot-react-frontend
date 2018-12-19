import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import NotificationsComponent, { INotificationsDispatchedProps, INotificationsStoreProps } from "./component";

const mapStateToProps = (state: IStore, ownProps: {}): INotificationsStoreProps => {
    return {
        notifications: state.Notifications,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {}): INotificationsDispatchedProps => {
    return {
        autohideNotifications: () => dispatch(actions.autohide()),
        hideNotification: (id: string) => dispatch(actions.hide(id)),
    };
};

const Notifications = connect<INotificationsStoreProps, INotificationsDispatchedProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationsComponent);

export default Notifications;
