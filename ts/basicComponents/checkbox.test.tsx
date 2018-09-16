import { shallow } from "enzyme";

import * as React from "react";
// import { create } from "react-test-renderer";

import CheckBox, { ICheckboxProps } from "./checkbox";

describe("Checkbox", () => {
    it("should render and have no errors", () => {
        let startingValue: boolean = false;
        const props: ICheckboxProps = {
            getLabel: () => "LABEL",
            getValue: () => startingValue,
            id: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
        };
        const checkbox = shallow(
            <CheckBox {...props} />,
        );
        expect(checkbox.find("input").length).toBeGreaterThan(0);
        expect(checkbox.find(".checkbox__errors").length).toBe(0);
        expect(checkbox.find(".checkbox--error").length).toBe(0);

    });
    it("should render", () => {
        let startingValue: boolean = false;
        const props: ICheckboxProps = {
            getErrors: () => ["1", "2"],
            getLabel: () => "LABEL",
            getValue: () => startingValue,
            id: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
        };
        const checkbox = shallow(
            <CheckBox {...props} />,
        );
        expect(checkbox.find(".checkbox__errors").length).toBe(1);
        expect(checkbox.find(".checkbox__errors").text()).toBe("1, 2");
        expect(checkbox.find(".checkbox--error").length).toBe(1);
    });
    it("should properly change state", () => {
        let startingValue: boolean = false;
        const props: ICheckboxProps = {
            getLabel: () => "LABEL",
            getValue: () => startingValue,
            id: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
        };
        const checkbox = shallow(
            <CheckBox {...props} />,
        );

        checkbox.find("input").simulate("click", { currentTarget: { checked: true } });
        expect(startingValue).toBe(true);
        checkbox.find("input").simulate("click", { currentTarget: { checked: false } });
        expect(startingValue).toBe(false);
        checkbox.find("input").simulate("click", { currentTarget: { checked: false } });
        expect(startingValue).toBe(false);
    });
});
