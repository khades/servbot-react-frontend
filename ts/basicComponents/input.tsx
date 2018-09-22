import * as React from "react";
import ControlGroup from "./control-group";

export interface IInputProps {
    id: string;
    getLabel: () => string;
    getValue: () => string;
    setValue: (value: string) => void;
    getErrors?: () => string[];
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
                getLabel={this.props.getLabel}
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
