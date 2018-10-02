import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as channelSelectors from "../channel/storeselectors";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SideMenu, { ISideMenuProps } from "./component";

const mapStateToProps = (state: IStore, props: ISideMenuProps) => {
    return {
        isModOnChannel: channelSelectors.isUserMod(state, props),
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
