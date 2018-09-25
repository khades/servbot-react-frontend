import * as React from "react";
import { create } from "react-test-renderer";
import Checkbox, { ICheckboxProps } from "./checkbox";

describe("Checkbox", () => {
    it("should render and have no errors", () => {
        let startingValue: boolean = false;
        const props: ICheckboxProps = {
            id: "LABEL",
            label: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
            value: startingValue,
        };
        const checkbox = create(
            <Checkbox {...props} />,
        );
        expect(checkbox.toJSON()).toMatchSnapshot();

        expect(
            checkbox.root.findAll((el) => el.type === "input" && el.props.type === "checkbox").length,
        ).toBeGreaterThan(0);
        expect(checkbox.root.findAll(
            (el) => el.type === "label" && el.children && el.children[0] === "LABEL").length).toBeGreaterThan(0);

        expect(checkbox.root.findAll((el) => el.props.className === "checkbox__errors").length).toBe(0);
        expect(checkbox.root.findAll((el) => el.props.className === "checkbox--error").length).toBe(0);

    });
    it("should render and have errors", () => {
        let startingValue: boolean = true;
        const props: ICheckboxProps = {
            errors: ["1", "2"],
            id: "LABEL",
            label: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
            value: startingValue,
        };

        const checkbox = create(
            <Checkbox {...props} />,
        );
        expect(checkbox.toJSON()).toMatchSnapshot();
        expect(checkbox.root.findAll(
            (el) => el.props.className === "checkbox__errors").length).toBe(1);
        expect(checkbox.root.findAll(
            (el) => el.props.className === "checkbox checkbox--error").length).toBe(1);
        expect(checkbox.root.findAll(
            (el) => el.type === "label" && el.children && el.children[0] === "LABEL").length).toBeGreaterThan(0);
        expect(checkbox.root.findAll(
            (el) => el.props.className === "checkbox__errors" && el.children && el.children[0] === "1, 2",
        ).length).toBe(1);

    });
    it("should properly change state", () => {
        let startingValue: boolean = false;
        const props: ICheckboxProps = {
            id: "LABEL",
            label: "LABEL",
            setValue: (value: boolean) => { startingValue = value; },
            value: startingValue,
        };
        const checkbox = create(
            <Checkbox {...props} />,
        ).root;
        const input = checkbox.find((el) => el.type === "input" && el.props.type === "checkbox");
        input.props.onClick({ currentTarget: { checked: true } });
        expect(startingValue).toBe(true);
        input.props.onClick({ currentTarget: { checked: false } });
        expect(startingValue).toBe(false);
        input.props.onClick({ currentTarget: { checked: false } });
        expect(startingValue).toBe(false);
    });
});
