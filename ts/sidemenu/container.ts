import * as actions from "./actioncreators";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import SideMenu from "./component";
import { IStore } from "../reducers";
import * as channelSelectors from "../userInfo/storeselectors";

const mapStateToProps = (state: IStore) => {
    return {
        currentChannel: state.userInfo.currentChannel,
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
