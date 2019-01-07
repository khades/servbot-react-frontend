import "core-js/es6/promise";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.string.starts-with";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Loadable from "react-loadable";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
// import { createLogger } from "redux-logger";
import "whatwg-fetch";
import time from "./time/time";
time.getTime();
Promise.all([import("./reducers"), import("./sagas")]).then((input) => {
    const reducers = input[0];
    const sagas = input[1];
    // const reduxlogger = createLogger({
    //     // ...options
    // });

    const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
    const store = createStore(
        reducers.default,
        applyMiddleware(
            // reduxlogger,
            sagaMiddleware),
    );

    sagaMiddleware.run(sagas.default);

    const LoadablePageContainer = Loadable({
        loader: () => import("./page/container"),
        loading: () => <div />,
    });

    ReactDOM.render((
        <Provider store={store}>
            <HashRouter>
                <LoadablePageContainer />
            </HashRouter>
        </Provider>
    ), document.getElementById("main"));

});

// import reducers from "./reducers";
//  import sagas from "./sagas";

document.title = "Servbot";
