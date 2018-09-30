import * as React from "react";
import { hot } from "react-hot-loader";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router";
import { Dispatch } from "redux";
import "../scss/index.scss";
import IndexRedirector from "./indexRedirector";
import Notifications from "./notifications/container";
import { IStore } from "./reducers";
import * as routes from "./routes/routes";
import * as actions from "./userinfo/actioncreators";
import { IUserInfoState } from "./userinfo/reducer";
import * as selectors from "./userinfo/storeselectors";
import States from "./utils/states";

interface IPageProps {
    getUserInfo: () => void;
    userInfo: IUserInfoState;
}

const LoadableStartPage = Loadable({
    loader: () => import("./startpage/container"),
    loading: () => <div>Loading...</div>,
});

const LoadableChannelUsers = Loadable({
    loader: () => import("./channelUsers/container"),
    loading: () => <div>Loading...</div>,
});

const LoadableUserLogs = Loadable({
    loader: () => import("./userLogs/container"),
    loading: () => <div>Loading...</div>,
});

const LoadableBans = Loadable({
    loader: () => import("./bans/container"),
    loading: () => <div>Loading...</div>,
});

const LoadableSideMenu = Loadable({
    loader: () => import("./sidemenu/container"),
    loading: () => <div>Loading...</div>,
});

const LoadableHeader = Loadable({
    loader: () => import("./header/container"),
    loading: () => <div>Loading...</div>,
});

class PageComponent extends React.Component<IPageProps, {}> {

    public componentDidMount() {
        if (this.props.userInfo.state === States.NOTINITIATED) {
            this.props.getUserInfo();
        }
    }

    public render() {
        return (
            //    <StatusWrapper state={this.props.userInfo.state}>
            <div className="site-container">
                {/* <Route path={routes.ChannelIndex} component={ChannelChanger} /> */}
                <Route exact={true} path="/" component={IndexRedirector} />
                <div className="site-container__menu">
                    <Route path={routes.ChannelIndex} component={LoadableSideMenu} />
                </div>
                <div className="site-container__header">
                    <LoadableHeader />
                </div>
                <Notifications />
                <section className="site-container__content">
                    <Route exact={true} path={routes.ChannelIndex} component={LoadableStartPage} />
                    <Route exact={true} path={routes.ChannelUsers} component={LoadableChannelUsers} />
                    <Route exact={true} path={routes.ChannelUserLogs} component={LoadableUserLogs} />
                    <Route exact={true} path={routes.Bans} component={LoadableBans} />
                </section>
            </div>
            //    </StatusWrapper>
        );
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        userInfo: selectors.getUserInfo(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getUserInfo: () => dispatch(actions.get()),
    };
};

const Page = hot(module)(withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageComponent)));

export default Page;
