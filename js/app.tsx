import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { createStore } from "redux";
import reducers from "./reducers";
// import fetchSaga from "../sagas";
// import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

// const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

// const createStoreWithMiddleware = compose(
//     applyMiddleware(sagaMiddleware);
// ) (createStore);

// function configureStore(initialState) {
//     const store = createStoreWithMiddleware(rootReducer);
//     sagaMiddleware.run(fetchSaga);
//     return store;
// }
// const store = configureStore(reducers);
const store = createStore(reducers);

class App extends Component {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <div>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <div>
                    <Route path="/dashboard" />
                </div>
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
