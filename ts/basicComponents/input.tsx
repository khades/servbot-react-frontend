import * as React from "react";
import ControlGroup from "./control-group";

export interface IInputProps {
    className?: string;
    errors?: string | string[];
    id: string;
    label: string | string[];
    value: string;
    setValue: (value: string, id?: string) => void;
    placeholder?: string;
}

export default class Input extends React.PureComponent<IInputProps, {}> {

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
                    defaultValue={this.props.value}
                    placeholder={this.props.placeholder}
                />
            </ControlGroup>
        );
    }

    private setValue = (event: React.FormEvent<HTMLInputElement>) => {
        this.props.setValue(event.currentTarget.value, this.props.id);
    }

}
