import * as React from "react";
// import { create } from "react-test-renderer";
import CheckBox, { ICheckboxProps } from "./checkbox";
import { shallow } from 'enzyme';

describe("Checkbox", () => {
    it("should render", () => {
        let startingValue: boolean = false;
        const props: ICheckboxProps = {
            getValue: () => startingValue,

            getLabel: () => "LABEL",
            id: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
        };
        const checkbox = shallow(
            <CheckBox {...props} />,
        );
        expect(checkbox.find("input").length).toBeGreaterThan(0);
    });
});
