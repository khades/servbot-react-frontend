import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import "../scss/index.scss";
import Checkbox, { ICheckboxProps } from "./basicComponents/checkbox";
import Notifications from "./notifications/container";
import SideMenu from "./sidenav/components";
import Header from "./header/component";
import StartPage from "./startpage/container";


const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagas);

class Page extends Component {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <div className="site-container">
                <div className="site-container__menu">
                    <SideMenu />
                </div>
                <div className="site-container__header">
                    <Header />
                </div>
                <Notifications />
                <section className="site-container__content">
                    <BrowserRouter>
                        <StartPage />
                    </BrowserRouter>
                </section>
            </div>);
    }
}

ReactDOM.render((
    <Provider store={store}>
        <Page />

    </Provider>
), document.body);
