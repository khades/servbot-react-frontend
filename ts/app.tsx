import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import * as sagas from "./sagas";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import "../scss/index.scss";
import Notifications from "./notifications/container";
import SideMenu from "./sidemenu/container";
import Header from "./header/container";
import StartPage from "./startpage/container";
import { createLogger } from "redux-logger";
import channelName from "./channelName/saga";

const reduxlogger = createLogger({
    // ...options
});
const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(reduxlogger, sagaMiddleware),
);

sagaMiddleware.run(sagas.rootSaga);

interface IHeaderMenuState {
    shown: boolean;
}
class Page extends Component<{}, IHeaderMenuState> {
    constructor() {
        super({});
    }
    public render() {
        return (
            <Provider store={store}>

                <div className="site-container">
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
            </Provider>
        );
    }
}

ReactDOM.render((
    <Page />
), document.getElementById("main"));
