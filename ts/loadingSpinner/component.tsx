import classnames from "classnames";

import * as React from "react";
import "../../scss/modules/_loading.scss";
import States from "../utils/states";

export interface ILoadingSpinnerStateProps {
    state: States;
}

const LoadingSpinnerComponent = React.memo((props: ILoadingSpinnerStateProps) => {
    const renderLoading = props.state === States.NOTINITIATED
        || props.state === States.LOADING
        || props.state === States.UPDATING;

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
});

export default LoadingSpinnerComponent;
