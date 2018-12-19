import * as React from "react";
import {
    Transition,

} from "react-transition-group";
import time from "../time/time";
import States from "../utils/states";
export interface IStatusWrapperOwnProps {
    state: States;
    children?: any;
}

export interface IStatusWrappedDispatchedProps {
    setState: (state: States) => void;
}

export type IStatusWrapperProps = IStatusWrapperOwnProps & IStatusWrappedDispatchedProps;

const StatusWrapperComponent = React.memo((props: IStatusWrapperProps) => {
    props.setState(props.state);

    if (props.state === States.NOTINITIATED) {
        return null;
    }

    if (props.state === States.LOADING) {
        return null;
    }

    if (props.state === States.NOTFOUND) {
        return <div className="error">NOT FOUND</div>;
    }

    if (props.state === States.NOTAUTHORIZED) {
        return <div className="error">NOTAUTHORIZED</div>;
    }

    if (props.state === States.OFFLINE) {
        return <div className="error">OFFLINE</div>;
    }

    if (props.state === States.FORBIDDEN) {
        return <div className="error">FORBIDDEN</div>;
    }

    const transitionStyles = {
        entered: { opacity: 1 },
        entering: { opacity: 1 },
        exited: { opacity: 1 },
        exiting: { opacity: 0 },
    };

    return props.children;

});

export default StatusWrapperComponent;
