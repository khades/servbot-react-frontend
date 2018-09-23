import * as React from "react";
import ControlGroup from "./control-group";

export interface ISelectProps {
    getValue: () => string;
    getValues: () => ISelectValue[];
    id: string;
    label: string;
    getErrors?: () => string[];
    setValue: (value: string) => void;
}

export interface ISelectValue {
    label: string;
    value: string;
}
interface ISelectState {
    selectedValue: string;
}
export default class Select extends React.Component<ISelectProps, ISelectState> {
    public static getDerivedStateFromProps(props: ISelectProps, state: ISelectState) {
        const value = props.getValue();
        return {
            selectedValue: props.getValues().some((option) => option.value === value) ? value : "",
        };
    }
    constructor(props: ISelectProps) {
        super(props);
        this.generateOptions = this.generateOptions.bind(this);
        this.setValue = this.setValue.bind(this);
        const value = props.getValue();
        this.state = {
            selectedValue: props.getValues().some((option) => option.value === value) ? value : "",
        };
    }
    public render() {
        return (
            <ControlGroup
                id={this.props.id}
                getErrors={this.props.getErrors}
                label={this.props.label}
            >
                <select defaultValue={this.state.selectedValue} id={this.props.id} onChange={this.setValue}>
                    {this.generateOptions()}
                </select>
            </ControlGroup>
        );
    }

    private setValue(event: React.FormEvent<HTMLSelectElement>) {
        this.props.setValue(event.currentTarget.value);
    }

    private generateOptions() {
        const options = this.props.getValues().map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ));
        if (this.state.selectedValue === "") {
            options.unshift(<option key="emptyOption" disabled={true} value={""} />);
        }
        return options;
    }
}
