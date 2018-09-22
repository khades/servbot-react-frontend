import * as React from "react";
import ControlGroup from "./control-group";

export interface ISelectProps {
    id: string;
    getLabel: () => string;
    getValue: () => string;
    setValue: (value: string) => void;
    getValues: () => ISelectValue[];
    getErrors?: () => string[];
}

export interface ISelectValue {
    label: string;
    value: string;
}

export default class Select extends React.Component<ISelectProps, {}> {
    constructor(props: ISelectProps) {
        super(props);
        this.generateOptions = this.generateOptions.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    public render() {
        return (
            <ControlGroup
                id={this.props.id}
                getErrors={this.props.getErrors}
                getLabel={this.props.getLabel}
            >
                <select id={this.props.id} onChange={this.setValue}>
                    {this.generateOptions()}
                </select>
            </ControlGroup>
        );
    }

    private setValue(event: React.FormEvent<HTMLSelectElement>) {
        this.props.setValue(event.currentTarget.value);
    }

    private generateOptions() {
        let hasOptionSelected = false;
        const value = this.props.getValue();
        if (value !== "") {
            hasOptionSelected = this.props.getValues().some((option) => option.value === value);
        }
        const options = this.props.getValues().map((option) => (
            <option key={option.value} value={option.value} selected={option.value === this.props.getValue()}>
                {option.label}
            </option>
        ));
        if (hasOptionSelected === false) {
            options.unshift(<option key="emptyOption" disabled={true} selected={true} value={""} />);
        }
        return options;
    }
}
