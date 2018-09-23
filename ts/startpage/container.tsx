import * as actions from "../userinfo/actioncreators";
import * as selectors from "../userinfo/storeselectors";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import StartPage from "./component";

const mapStateToProps = (state: IStore) => {
    return {
        getIfUserIsMod: () => selectors.getIfUserIsModerator(state),
        userInfo: selectors.getUserInfo(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getUserInfo: () => dispatch(actions.get()),
        setCurrentChannel: (channel: string) => dispatch(actions.setChannel(channel)),
    };
};

const VisibleNotifications = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartPage);

export default VisibleNotifications;
