import * as React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router";
import { Dispatch } from "redux";
import "../scss/index.scss";
import Bans from "./bans/container";
import ChannelChanger from "./channelChanger";
import ChannelUsers from "./channelUsers/container";
import Header from "./header/container";
import IndexRedirector from "./indexRedirector";
import Notifications from "./notifications/container";
import { IStore } from "./reducers";
import * as routes from "./routes/routes";
import SideMenu from "./sidemenu/container";
import StartPage from "./startpage/container";
import * as actions from "./userinfo/actioncreators";
import { IUserInfoState } from "./userinfo/reducer";
import * as selectors from "./userinfo/storeselectors";
import UserLogs from "./userLogs/container";
import States from "./utils/states";

interface IPageProps {
    getUserInfo: () => void;
    userInfo: IUserInfoState;
}

class PageComponent extends React.Component<IPageProps, {}> {

    public componentDidMount() {
        if (this.props.userInfo.state === States.NOTINITIATED) {
            this.props.getUserInfo();
        }
    }

    public render() {
        return (

            <div className="site-container">
                <Route path={routes.ChannelIndex} component={ChannelChanger} />
                <Route exact={true} path="/" component={IndexRedirector} />
                <div className="site-container__menu">
                    <SideMenu />
                </div>
                <div className="site-container__header">
                    <Header />
                </div>
                <Notifications />
                <section className="site-container__content">
                    <Route exact={true} path={routes.ChannelIndex} component={StartPage} />
                    <Route exact={true} path={routes.ChannelUsers} component={ChannelUsers} />
                    <Route exact={true} path={routes.ChannelUserLogs} component={UserLogs} />
                    <Route exact={true} path={routes.Bans} component={Bans} />

                </section>
            </div>

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

const Page = (withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageComponent)));

export default Page;
