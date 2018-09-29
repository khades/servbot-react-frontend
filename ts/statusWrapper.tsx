import classnames from "classnames";

import * as React from "react";
import { Transition } from "react-transition-group";
import "../scss/modules/_loading.scss";
import States from "./utils/states";

export interface IStatusWrapperState {
    state: States;
}

export class StatusWrapper extends React.Component<IStatusWrapperState, {}> {
    public render = () => (
        <div className="content">
            {this.renderWrappedContent()}
        </div>
    )
    protected generateLoading = (exiting: boolean) => {
        const itemClasses = classnames({
            "loading": true,
            "loading--hidden": exiting === true,
        });
        return (
            <div className={itemClasses}>
                <div className="loading__backdrop" />
                <div className="loading__spinner" />
            </div>
        );
    }
    protected generateTransitionLoading = () => (
        <Transition timeout={{enter: 3000, exit: 3000}}>
            {(state) => this.generateLoading(state === "exiting")}
        </Transition>
    )
    protected renderWrappedContent = () => {

        if (this.props.state === States.NOTINITIATED) {
            return this.generateTransitionLoading();
        }

        if (this.props.state === States.LOADING) {
            return this.generateTransitionLoading();
        }

        if (this.props.state === States.NOTFOUND) {
            return <div className="error">NOT FOUND</div>;
        }

        if (this.props.state === States.NOTAUTHORIZED) {
            return <div className="error">NOTAUTHORIZED</div>;
        }
        if (this.props.state === States.FORBIDDEN) {
            return <div className="error">FORBIDDEN</div>;
        }
        if (this.props.state === States.UPDATING) {
            return (
                <React.Fragment>
                    {this.generateTransitionLoading()}
                    {this.props.children}
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>

                {this.props.children}
            </React.Fragment>
        );
    }
}
