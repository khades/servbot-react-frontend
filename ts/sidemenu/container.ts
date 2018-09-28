import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as channelSelectors from "../userInfo/storeselectors";
import * as actions from "./actioncreators";
import SideMenu from "./component";

const mapStateToProps = (state: IStore) => {
    return {
        isModOnChannel: channelSelectors.getIfUserIsModerator(state),
        menuState: state.sideMenu.state,
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        hideMenu: () => dispatch(actions.hide()),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideMenu);

export default VisibleNotifications;
