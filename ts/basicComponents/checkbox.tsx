import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_checkbox.scss";

export interface ICheckboxProps {
    getValue: () => boolean;
    getErrors?: () => string[];
    getLabel: () => string;
    id: string;
    setValue: (value: boolean) => void;
}

export default class Checkbox extends React.Component<ICheckboxProps, {}> {
    constructor() {
        super();
        this.clickButton = this.clickButton.bind(this);
    }
    public render() {
        const inputClassname = classnames({
            "checkbox": true,
            "checkbox--error": this.props.getErrors && this.props.getErrors().length > 0,
        });
        return (
            <div className={inputClassname} >
                <input
                    type="checkbox"
                    id={this.props.id}
                    defaultChecked={this.props.getValue()}
                    onClick={this.clickButton}
                />
                <label htmlFor={this.props.id}>
                    {this.props.getLabel()}
                </label>
                {this.renderErrors()}
            </div>
        );
    }
    private clickButton(event: React.MouseEvent<HTMLInputElement>): void {
        this.props.setValue(event.currentTarget.checked);
    }
    private renderErrors() {
        if (this.props.getErrors && this.props.getErrors().length > 0) {
            return (
                <div className="checkbox__errors">
                    {this.props.getErrors().join(", ")}
                </div>
            );
        }
        return null;
    }
}
