import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "../sidemenu/actioncreators";
import Header from "./component";

const mapStateToProps = (state: IStore) => {
    return {
        getSideMenuState: () => state.sideMenu.state,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        hideMenu: (id: string) => dispatch(actions.hide()),
        showMenu: (id: string) => dispatch(actions.show()),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export default VisibleNotifications;
