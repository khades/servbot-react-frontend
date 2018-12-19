import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as channelSelectors from "../channel/storeselectors";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SideMenu, { ISideMenuDispatchedProps, ISideMenuOwnProps, ISideMenuStateProps } from "./component";

const mapStateToProps = (state: IStore, ownProps: ISideMenuOwnProps): ISideMenuStateProps => {
    return {
        isModOnChannel: channelSelectors.isUserMod(state, ownProps),
        menuState: state.SideMenu.state,
        userInfo: state.UserInfo,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ISideMenuOwnProps): ISideMenuDispatchedProps => {
    return {
        hideMenu: () => dispatch(actions.hide()),
    };
};

const VisibleNotifications = connect<ISideMenuStateProps, ISideMenuDispatchedProps, ISideMenuOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(SideMenu);

export default VisibleNotifications;
