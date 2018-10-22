import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Loadable from "react-loadable";
import { Provider } from "react-redux";
// import { hashHistory } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import { syncHistoryWithStore } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import reducers from "./reducers";
import * as sagas from "./sagas";

const reduxlogger = createLogger({
    // ...options
});

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(
        // reduxlogger,
        sagaMiddleware),
);

sagaMiddleware.run(sagas.rootSaga);

const LoadablePageContainer = Loadable({
    loader: () => import("./page"),
    loading: () => <div />,
});

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <LoadablePageContainer />
        </HashRouter>
    </Provider>
), document.getElementById("main"));
