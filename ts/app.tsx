import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { createStore, applyMiddleware  } from "redux";
import reducers from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagas);

const action = type => store.dispatch({ type });

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
