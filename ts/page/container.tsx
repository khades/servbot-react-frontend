import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "../userinfo/actioncreators";
import * as selectors from "../userinfo/storeselectors";
import PageComponent, { IPageDispatchProps, IPageStateProps } from "./component";

const mapStateToProps = (state: IStore): IPageStateProps => {
    return {
        userInfo: selectors.getUserInfo(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IPageDispatchProps => {
    return {
        getUserInfo: () => dispatch(actions.get()),
    };
};

const PageContainer = withRouter(connect<IPageStateProps, IPageDispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
)(PageComponent));

export default PageContainer;
