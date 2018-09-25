import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Route, HashRouter, withRouter } from "react-router-dom";
import { createStore, applyMiddleware, Dispatch } from "redux";
import reducers, { IStore } from "./reducers";
import * as sagas from "./sagas";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import "../scss/index.scss";
import Notifications from "./notifications/container";
import SideMenu from "./sidemenu/container";
import Header from "./header/container";
import StartPage from "./startpage/container";
import { createLogger } from "redux-logger";
import { IUserInfoState } from "./userinfo/reducer";
import * as selectors from "./userinfo/storeselectors";
import * as actions from "./userinfo/actioncreators";
import States from "./utils/states";
import ChannelChanger from "./channelChanger";
const Child = ({ match }) => {
    console.log(match);
    return (
        <div>
            <h3>ID: Hello</h3>
        </div>
    );
}
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
class Page extends Component<IPageProps, {}> {

    public componentDidMount() {
        if (this.props.userInfo.state === States.NOTINITIATED) {
            this.props.getUserInfo();
        }
    }

    public render() {
        return (
            <div className="site-container">
                <Route path="/channel/:id" component={ChannelChanger} />
                <div className="site-container__menu">
                    <SideMenu />
                </div>
                <div className="site-container__header">
                    <Header />
                </div>
                <Notifications />
                <section className="site-container__content">
                    <div className="content">
                        <StartPage />
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
