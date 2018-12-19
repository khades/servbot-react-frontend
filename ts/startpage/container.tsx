import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as selectors from "../channel/storeselectors";
import { IStore } from "../reducers";
import StartPageComponent, { IStartPageOwnProps, IStartPageStateProps } from "./component";

const mapStateToProps = (state: IStore, ownProps: IStartPageOwnProps): IStartPageStateProps => {
    return {
        isModOnChannel: selectors.isUserMod(state, ownProps),
        userInfo: state.UserInfo,
    };
};

const StartPage = connect<IStartPageStateProps, IStartPageOwnProps>(
    mapStateToProps,
)(StartPageComponent);

export default StartPage;
