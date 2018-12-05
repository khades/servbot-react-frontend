import classnames from "classnames";

import * as React from "react";
import "../scss/modules/_loading.scss";
import States from "./utils/states";

export interface IStatusWrapperState {
    state: States;
}

export class StatusWrapper extends React.PureComponent<IStatusWrapperState, {}> {
    public render = () => {
        const renderLoading = this.props.state === States.NOTINITIATED
            || this.props.state === States.LOADING
            || this.props.state === States.UPDATING;
        const itemClasses = classnames({
            "loading": true,
            "loading--hidden": renderLoading !== true,
        });
        return (
            <div className="content">
                <div className={itemClasses}>
                    <div className="loading__backdrop">
                        <div className="loading__spinner" />
                    </div>
                </div>
                {this.renderWrappedContent()}
            </div>
        );
    }

    protected renderWrappedContent = () => {
        if (this.props.state === States.NOTINITIATED) {
            return null;
        }

        if (this.props.state === States.LOADING) {
            return null;
        }

        if (this.props.state === States.NOTFOUND) {
            return <div className="error">NOT FOUND</div>;
        }

        if (this.props.state === States.NOTAUTHORIZED) {
            return <div className="error">NOTAUTHORIZED</div>;
        }

        if (this.props.state === States.OFFLINE) {
            return <div className="error">OFFLINE</div>;
        }

        if (this.props.state === States.FORBIDDEN) {
            return <div className="error">FORBIDDEN</div>;
        }
        if (this.props.state === States.UPDATING) {
            return (
                <React.Fragment>
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
