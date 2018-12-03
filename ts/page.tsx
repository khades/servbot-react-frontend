import * as React from "react";
import { hot } from "react-hot-loader";
import * as Loadable from "react-loadable";
import { connect } from "react-redux";
import { Route, RouteComponentProps, withRouter } from "react-router";
import { Dispatch } from "redux";
import "../scss/index.scss";
import IndexRedirector from "./indexRedirector";
import Notifications from "./notifications/container";
import { IStore } from "./reducers";
import * as routes from "./routes/routes";
import { StatusWrapper } from "./statusWrapper";
import * as actions from "./userinfo/actioncreators";
import { IUserInfoState } from "./userinfo/reducer";
import * as selectors from "./userinfo/storeselectors";
import States from "./utils/states";

interface IPageProps extends RouteComponentProps {
    getUserInfo: () => void;
    userInfo: IUserInfoState;
}

const LoadableStartPage = Loadable({
    loader: () => import("./startpage/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableChannelUsers = Loadable({
    loader: () => import("./channelUsers/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableUserLogs = Loadable({
    loader: () => import("./userLogs/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableBans = Loadable({
    loader: () => import("./bans/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableSideMenu = Loadable({
    loader: () => import("./sidemenu/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableHeader = Loadable({
    loader: () => import("./header/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableTemplates = Loadable({
    loader: () => import("./templates/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableTemplate = Loadable({
    loader: () => import("./template/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableSubAlerts = Loadable({
    loader: () => import("./subAlerts/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableAutoMessages = Loadable({
    loader: () => import("./autoMessages/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableAutoMessage = Loadable({
    loader: () => import("./autoMessage/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableSubDay = Loadable({
    loader: () => import("./subday/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableSubDays = Loadable({
    loader: () => import("./subdays/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableSubscriptions = Loadable({
    loader: () => import("./subscriptions/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

const LoadableSubTrain = Loadable({
    loader: () => import("./subtrain/container"),
    loading: () => <StatusWrapper state={States.NOTINITIATED} />,
});

class PageComponent extends React.PureComponent<IPageProps, {}> {

    public componentDidMount() {
        if (this.props.userInfo.state === States.NOTINITIATED) {
            this.props.getUserInfo();
        }
    }

    public render() {
        return (
            //    <StatusWrapper state={this.props.userInfo.state}>
            <div className="site-container">
                <Route exact={true} path="/" component={IndexRedirector} />
                <div className="site-container__menu">
                    <Route path={routes.ChannelIndex} component={LoadableSideMenu} />
                </div>
                <div className="site-container__header">
                    <LoadableHeader />
                </div>
                <Notifications />
                <section className="site-container__content">
                    <Route exact={true} path={routes.AutoMessage} component={LoadableAutoMessage} />
                    <Route exact={true} path={routes.AutoMessages} component={LoadableAutoMessages} />
                    <Route exact={true} path={routes.ChannelIndex} component={LoadableStartPage} />
                    <Route exact={true} path={routes.ChannelUsers} component={LoadableChannelUsers} />
                    <Route exact={true} path={routes.ChannelUserLogs} component={LoadableUserLogs} />
                    <Route exact={true} path={routes.Bans} component={LoadableBans} />
                    <Route exact={true} path={routes.Templates} component={LoadableTemplates} />
                    <Route exact={true} path={routes.Template} component={LoadableTemplate} />
                    <Route exact={true} path={routes.SubAlerts} component={LoadableSubAlerts} />
                    <Route exact={true} path={routes.SubDay} component={LoadableSubDay} />
                    <Route exact={true} path={routes.SubDays} component={LoadableSubDays} />
                    <Route exact={true} path={routes.Subs} component={LoadableSubscriptions} />
                    <Route exact={true} path={routes.SubTrain} component={LoadableSubTrain} />

                </section>
            </div>
            //    </StatusWrapper>
        );
    }
}

interface IPageMappedProps {
    userInfo: IUserInfoState;
}

const mapStateToProps = (state: IStore) => {
    return {
        userInfo: selectors.getUserInfo(state),
    };
};

interface IPageDispatchProps {
    getUserInfo: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getUserInfo: () => dispatch(actions.get()),
    };
};

const Page = hot(module)(withRouter(connect<IPageMappedProps, IPageDispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
)(PageComponent)));

export default Page;
