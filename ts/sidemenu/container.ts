import * as actions from "./actioncreators";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import SideMenu from "./component";
import { IStore } from "../reducers";
import * as channelSelectors from "../userInfo/storeselectors";

const mapStateToProps = (state: IStore) => {
    return {
        getCurrentChannel: () => state.userInfo.currentChannel,
        getIsModOnChannel: () => channelSelectors.getIfUserIsModerator(state),
        getMenuState: () =>  state.sideMenu.state,
        getUserInfo: () => state.userInfo,
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
