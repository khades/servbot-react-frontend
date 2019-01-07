import * as React from "react";
import * as Loadable from "react-loadable";
import { Route, RouteComponentProps } from "react-router";
import "../../scss/index.scss";
import AfterAuth from "../afterAuth/component";
import IndexRedirector from "../indexRedirector/container";
import LoadingSpinner from "../loadingSpinner/container";
import Notifications from "../notifications/container";
import * as routes from "../routes/routes";
import SideMenu from "../sidemenu/container";
import StatusWrapper from "../statusWrapper/container";
import { IUserInfoState } from "../userinfo/reducer";
import States from "../utils/states";

const LoadableStartPage = Loadable({
    loader: () => import("../startpage/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableChannelUsers = Loadable({
    loader: () => import("../channelUsers/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableUserLogs = Loadable({
    loader: () => import("../userLogs/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableBans = Loadable({
    loader: () => import("../bans/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableHeader = Loadable({
    loader: () => import("../header/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableTemplates = Loadable({
    loader: () => import("../templates/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableTemplate = Loadable({
    loader: () => import("../template/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableSubAlerts = Loadable({
    loader: () => import("../subAlerts/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableAutoMessages = Loadable({
    loader: () => import("../automessages/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableAutoMessage = Loadable({
    loader: () => import("../automessage/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableSubDay = Loadable({
    loader: () => import("../subday/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableSubDays = Loadable({
    loader: () => import("../subdays/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableSubscriptions = Loadable({
    loader: () => import("../subscriptions/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableSubTrain = Loadable({
    loader: () => import("../subtrain/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableExternalServices = Loadable({
    loader: () => import("../externalservices/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

const LoadableSongRequests = Loadable({
    loader: () => import("../songrequests/container"),
    loading: () => <StatusWrapper state={States.LOADING} />,
});

// const LoadableDonationSources = Loadable({
//     loader: () => import("../donationSources/container"),
//     loading: () => <StatusWrapper state={States.LOADING} />,
// });

export interface IPageStateProps {
    userInfo: IUserInfoState;
}

export interface IPageDispatchProps {
    getUserInfo: () => void;
}

export type IPageProps = IPageStateProps & IPageDispatchProps & RouteComponentProps;

export default class PageComponent extends React.PureComponent<IPageProps, {}> {

    public componentDidMount() {
        if (this.props.userInfo.state === States.NOTINITIATED) {
            this.props.getUserInfo();
        }
    }

    public render() {
        return (
            <div className="site-container">
                <Route exact={true} path="/" component={IndexRedirector} />
                <div className="site-container__menu">
                    <Route path={routes.ChannelIndex} component={SideMenu} />
                </div>
                <div className="site-container__header">
                    <LoadableHeader />
                </div>
                <Notifications />
                <section className="site-container__content">
                    <LoadingSpinner />
                    <div className="content">
                        <Route exact={true} path={routes.AfterAuth} component={AfterAuth} />
                        <Route exact={true} path={routes.AutoMessage} component={LoadableAutoMessage} />
                        <Route exact={true} path={routes.AutoMessages} component={LoadableAutoMessages} />
                        <Route exact={true} path={routes.Bans} component={LoadableBans} />
                        <Route exact={true} path={routes.ChannelIndex} component={LoadableStartPage} />
                        <Route exact={true} path={routes.ChannelUsers} component={LoadableChannelUsers} />
                        <Route exact={true} path={routes.ChannelUserLogs} component={LoadableUserLogs} />
                        <Route exact={true} path={routes.ExternalServices} component={LoadableExternalServices} />
                        <Route exact={true} path={routes.Templates} component={LoadableTemplates} />
                        <Route exact={true} path={routes.Template} component={LoadableTemplate} />
                        <Route exact={true} path={routes.SubAlerts} component={LoadableSubAlerts} />
                        <Route exact={true} path={routes.SubDay} component={LoadableSubDay} />
                        <Route exact={true} path={routes.SubDays} component={LoadableSubDays} />
                        <Route exact={true} path={routes.Subs} component={LoadableSubscriptions} />
                        <Route exact={true} path={routes.SubTrain} component={LoadableSubTrain} />
                        <Route exact={true} path={routes.SongRequests} component={LoadableSongRequests} />
                        {/* <Route exact={true} path={routes.DonationSources} component={LoadableDonationSources} /> */}
                    </div>
                </section>
            </div>
        );
    }
}
