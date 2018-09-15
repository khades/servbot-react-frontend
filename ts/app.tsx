import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import "../scss/index.scss";

import SideMenu from "./sidenav/components";
const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagas);

class App extends Component {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <div className="site-container">
                <div className="site-container__menu">
                    <SideMenu />
                </div>
                <section className="site-container__content">
                        <Route path="/dashboard" />
                </section>
            </div>);
    }
}

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.body);
