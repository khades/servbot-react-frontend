import * as React from "react";
import ControlGroup from "./control-group";

export interface INumericInputProps {
    className?: string;
    errors?: string | string[];
    id: string;
    label: string | string[];
    value: number;
    setValue: (value: number, id?: string) => void;
    placeholder?: string;
}

export default class NumericInput extends React.PureComponent<INumericInputProps, {}> {

    public render() {
        return (
            <ControlGroup
                className={this.props.className}
                id={this.props.id}
                errors={this.props.errors}
                label={this.props.label}
            >
                <input
                    id={this.props.id}
                    onChange={this.setValue}
                    value={this.props.value.toString()}
                    placeholder={this.props.placeholder}
                />
            </ControlGroup>
        );
    }

    private setValue = (event: React.FormEvent<HTMLInputElement>) => {
        const value = parseInt(event.currentTarget.value, 10) || 0;
        this.props.setValue(value, this.props.id);
    }

}
