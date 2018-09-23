import * as React from "react";
import ControlGroup from "./control-group";

export interface IInputProps {
    getErrors?: () => string[];
    getValue: () => string;
    id: string;
    label: string;
    setValue: (value: string) => void;
}

export default class Input extends React.Component<IInputProps, {}> {
    constructor(props: IInputProps) {
        super(props);
        this.setValue = this.setValue.bind(this);
    }
    public render() {
        return (
            <ControlGroup
                id={this.props.id}
                getErrors={this.props.getErrors}
                label={this.props.label}
            >
                <input
                    id={this.props.id}
                    onChange={this.setValue}
                    defaultValue={this.props.getValue()}
                />
            </ControlGroup>
        );
    }

    private setValue(event: React.FormEvent<HTMLInputElement>) {
        this.props.setValue(event.currentTarget.value);
    }

}
