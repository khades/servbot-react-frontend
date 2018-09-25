import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { HashRouter, Route, withRouter } from "react-router-dom";
import { applyMiddleware, createStore, Dispatch } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import "../scss/index.scss";
import ChannelChanger from "./channelChanger";
import Header from "./header/container";
import IndexRedirector from "./indexRedirector";
import Notifications from "./notifications/container";
import reducers, { IStore } from "./reducers";
import * as routes from "./routes";
import * as sagas from "./sagas";
import SideMenu from "./sidemenu/container";
import StartPage from "./startpage/container";
import * as actions from "./userinfo/actioncreators";
import { IUserInfoState } from "./userinfo/reducer";
import * as selectors from "./userinfo/storeselectors";
import States from "./utils/states";
const reduxlogger = createLogger({
    // ...options
});
const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(reduxlogger, sagaMiddleware),
);

sagaMiddleware.run(sagas.rootSaga);

interface IPageProps {
    getUserInfo: () => void;
    userInfo: IUserInfoState;
}
class Page extends React.Component<IPageProps, {}> {

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
                    <div className="content">
                        <Route exact={true} path={routes.ChannelIndex} component={StartPage} />

                    </div>
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

const PageContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Page));

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <PageContainer />
        </HashRouter>
    </Provider>
), document.getElementById("main"));
