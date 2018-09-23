import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_control-group.scss";

export interface IControlGroupProps {
    getErrors?: () => string[];
    id: string;
    label: string;
}

export default class ControlGroup extends React.Component<IControlGroupProps, {}> {
    constructor(props: IControlGroupProps) {
        super(props);
        this.renderErrors = this.renderErrors.bind(this);
    }
    public render() {
        const groupClassname = classnames({
            "control-group": true,
            "control-group--error": this.props.getErrors && this.props.getErrors().length > 0,
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
    private renderErrors() {
        if (this.props.getErrors && this.props.getErrors().length > 0) {
            return (
                <div className="control-group__errors">
                    {this.props.getErrors().join(", ")}
                </div>
            );
        }
        return null;
    }
}
