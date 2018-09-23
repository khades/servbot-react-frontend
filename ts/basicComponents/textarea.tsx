import * as React from "react";
import ControlGroup from "./control-group";
import { IInputProps } from "./input";

export default class Textarea extends React.Component<IInputProps, {}> {
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
                <textarea
                    id={this.props.id}
                    onChange={this.setValue}
                    defaultValue={this.props.getValue()}
                />
            </ControlGroup>
        );
    }

    private setValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.props.setValue(event.currentTarget.value);
    }

}
