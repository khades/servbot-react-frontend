import * as React from "react";
import ControlGroup from "./control-group";

export interface IInputProps {
    errors?: string[];
    id: string;
    label: string;
    value: string;
    setValue: (value: string) => void;
}

export default class Input extends React.Component<IInputProps, {}> {

    public render() {
        return (
            <ControlGroup
                id={this.props.id}
                errors={this.props.errors}
                label={this.props.label}
            >
                <input
                    id={this.props.id}
                    onChange={this.setValue}
                    defaultValue={this.props.value}
                />
            </ControlGroup>
        );
    }

    private setValue = (event: React.FormEvent<HTMLInputElement>) => {
        this.props.setValue(event.currentTarget.value);
    }

}
