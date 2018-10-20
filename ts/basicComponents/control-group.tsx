import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_control-group.scss";
import { generateErrors } from "./utls";

export interface IControlGroupProps {
    errors?: string | string[];
    id: string;
    label: string | string[];
    className?: string;
}

export default class ControlGroup extends React.PureComponent<IControlGroupProps, {}> {

    public render() {
        const groupClassname = classnames({
            "control-group": true,
            "control-group--error": this.props.errors && this.props.errors.length > 0,
        }, this.props.className);
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
                    {generateErrors(this.props.errors)}
                </div>
            );
        }
        return null;
    }
}
