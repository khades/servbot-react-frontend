import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "../sidemenu/actioncreators";
import { SideMenuStates } from "../sidemenu/reducer";
import HeaderComponent, { IHeaderDispatchProps, IHeaderStateProps } from "./component";

const mapStateToProps = (state: IStore, ownProps: {}): IHeaderStateProps => {
    return {
        sideMenuState: state.SideMenu.state,
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {}): IHeaderDispatchProps => {
    return {
        hideMenu: () => dispatch(actions.hide()),
        showMenu: () => dispatch(actions.show()),
    };
};

const Header = connect<IHeaderStateProps, IHeaderDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderComponent);

export default Header;
