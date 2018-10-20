import * as React from "react";
import ControlGroup from "./control-group";

export interface ISelectProps {
    value: string;
    values: ISelectValue[];
    id: string;
    label: string;
    errors?: string[];
    setValue: (value: string) => void;
}

export interface ISelectValue {
    label: string;
    value: string;
}
interface ISelectState {
    readonly selectedValue: string;
}
export default class Select extends React.PureComponent<ISelectProps, ISelectState> {
    public static getDerivedStateFromProps(props: ISelectProps, state: ISelectState) {
        return {
            selectedValue: props.values.some((option) => option.value === props.value) ? props.value : "",
        };
    }
    constructor(props: ISelectProps) {
        super(props);

        this.state = {
            selectedValue: props.values.some((option) => option.value === props.value) ? props.value : "",
        };
    }
    public render() {
        return (
            <ControlGroup
                id={this.props.id}
                errors={this.props.errors}
                label={this.props.label}
            >
                <select defaultValue={this.state.selectedValue} id={this.props.id} onChange={this.setValue}>
                    {this.generateOptions()}
                </select>
            </ControlGroup>
        );
    }

    private setValue = (event: React.FormEvent<HTMLSelectElement>) => {
        this.props.setValue(event.currentTarget.value);
    }

    private generateOptions = () => {
        const options = this.props.values.map((option) => (
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
