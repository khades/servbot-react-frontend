import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_checkbox.scss";
import { generateErrors } from "./utls";

export interface ICheckboxProps {
    value: boolean;
    errors?: string | string[];
    label: string;
    id: string;
    setValue: (value: boolean) => void;
}
/**
 *
 *
 * @export
 * @class Checkbox
 * @extends {React.PureComponent<ICheckboxProps, {}>}
 */
export default class Checkbox extends React.PureComponent<ICheckboxProps, {}> {

    public render() {
        const inputClassname = classnames({
            "checkbox": true,
            "checkbox--error": this.props.errors && this.props.errors.length > 0,
        });
        return (
            <div className={inputClassname} >
                <input
                    type="checkbox"
                    id={this.props.id}
                    defaultChecked={this.props.value}
                    onClick={this.clickButton}
                />
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                {this.renderErrors()}
            </div>
        );
    }
    private clickButton = (event: React.MouseEvent<HTMLInputElement>) => {
        this.props.setValue(event.currentTarget.checked);
    }
    private renderErrors = () => {
        if (this.props.errors && this.props.errors.length > 0) {
            return (
                <div className="checkbox__errors">
                    {generateErrors(this.props.errors)}
                </div>
            );
        }
        return null;
    }
}
