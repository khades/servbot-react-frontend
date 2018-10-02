import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as selectors from "../channel/storeselectors";
import { IStore } from "../reducers";
import StartPage, { IStartPageProps } from "./component";

const mapStateToProps = (state: IStore, props: IStartPageProps) => {
    return {
        isModOnChannel: selectors.isUserMod(state, props),
        userInfo: state.userInfo,
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
