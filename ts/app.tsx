import { ConnectedRouter, connectRouter, routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {  Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import PageContainer from "./page";
import reducers, { IStore } from "./reducers";
import * as sagas from "./sagas";

const reduxlogger = createLogger({
    // ...options
});

const history = createHashHistory();

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    connectRouter(history)(reducers),
    applyMiddleware(reduxlogger, sagaMiddleware, routerMiddleware(history)),
);

sagaMiddleware.run(sagas.rootSaga);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PageContainer />
        </ConnectedRouter>
    </Provider>
), document.getElementById("main"));
