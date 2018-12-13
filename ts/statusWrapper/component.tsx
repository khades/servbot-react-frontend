import * as React from "react";
import States from "../utils/states";

export interface IStatusWrapperProps {
    state: States;
    setState: (state: States) => void;
}

export default class StatusWrapperComponent extends React.PureComponent<IStatusWrapperProps, {}> {

    public componentDidMount() {
        this.props.setState(this.props.state);
    }

    public componentDidUpdate(prevProps: IStatusWrapperProps) {
        if (prevProps.state !== this.props.state) {
            this.props.setState(this.props.state);
        }
    }

    public render = () => {
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
