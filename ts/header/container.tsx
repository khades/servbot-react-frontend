import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "../sidemenu/actioncreators";
import HeaderComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return {
        sideMenuState: state.sideMenu.state,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        hideMenu: () => dispatch(actions.hide()),
        showMenu: () => dispatch(actions.show()),
    };
};

const Header = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderComponent);

export default Header;
