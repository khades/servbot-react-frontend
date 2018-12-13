import classnames from "classnames";

import * as React from "react";
import "../../scss/modules/_loading.scss";
import States from "../utils/states";

export interface ILoadingSpinnerProps {
    state: States;
}

export default class LoadingSpinnerComponent extends React.PureComponent<ILoadingSpinnerProps, {}> {
    public render() {
        const renderLoading = this.props.state === States.NOTINITIATED
            || this.props.state === States.LOADING
            || this.props.state === States.UPDATING;
        const itemClasses = classnames({
            "loading": true,
            "loading--hidden": renderLoading !== true,
        });

        return (
            <div className={itemClasses}>
                <div className="loading__backdrop">
                    <div className="loading__spinner" />
                </div>
            </div>
        );
    }
}
