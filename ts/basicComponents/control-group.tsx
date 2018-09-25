import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_control-group.scss";

export interface IControlGroupProps {
    errors?: string[];
    id: string;
    label: string;
}

export default class ControlGroup extends React.Component<IControlGroupProps, {}> {

    public render() {
        const groupClassname = classnames({
            "control-group": true,
            "control-group--error": this.props.errors && this.props.errors.length > 0,
        });
        return (
            <div className={groupClassname} >
                <label className="control-group__label" htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                {this.props.children}
                {this.renderErrors()}
            </div>
        );
    }
    private renderErrors = () => {
        if (this.props.errors && this.props.errors.length > 0) {
            return (
                <div className="control-group__errors">
                    {this.props.errors.join(", ")}
                </div>
            );
        }
        return null;
    }
}
