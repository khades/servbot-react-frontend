import { connect } from "react-redux";
import { Dispatch } from "redux";
import { UserInfoActions } from "../userInfo/actions";
import * as actions from "../userInfo/actioncreators";
import StartPage from "./component";

const mapStateToProps = (state) => {
    return state.userInfo;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getUserInfo: () => dispatch(actions.get()),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartPage);

export default VisibleNotifications;
