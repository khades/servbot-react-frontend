import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as selectors from "../userinfo/storeselectors";
import StartPage from "./component";

const mapStateToProps = (state: IStore) => {
    return {
        ifUserIsMod: selectors.getIfUserIsModerator(state),
        userInfo: selectors.getUserInfo(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartPage);

export default VisibleNotifications;
