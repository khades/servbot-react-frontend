import * as React from "react";
import ControlGroup from "./control-group";
import { IInputProps } from "./input";

export default class TextArea extends React.PureComponent<IInputProps, {}> {
    public render() {
        return (
            <ControlGroup
                id={this.props.id}
                errors={this.props.errors}
                label={this.props.label}
            >
                <textarea
                    id={this.props.id}
                    onChange={this.setValue}
                    value={this.props.value}
                />
            </ControlGroup>
        );
    }

    private setValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.props.setValue(event.currentTarget.value);
    }

}
