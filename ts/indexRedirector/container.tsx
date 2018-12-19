
import { connect } from "react-redux";
import { IStore } from "../reducers";
import { IUserInfoState } from "../userinfo/reducer";
import * as selectors from "../userinfo/storeselectors";
import IndexRedirectorComponent from "./component";

const mapStateToProps = (state: IStore): IUserInfoState => {
    return selectors.getUserInfo(state);
};

const IndexRedirector = connect<IUserInfoState, {}>(
    mapStateToProps,
)(IndexRedirectorComponent);

export default IndexRedirector;
