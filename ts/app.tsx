import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Loadable from "react-loadable";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import time from "./time/time";
// import { createLogger } from "redux-logger";

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
