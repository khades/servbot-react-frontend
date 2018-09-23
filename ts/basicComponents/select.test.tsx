import * as React from "react";
import { create } from "react-test-renderer";
import Select, { ISelectProps } from "./select";

describe("Select", () => {
    it("should render and have no errors and no options selected", () => {
        const props: ISelectProps = {
            getLabel: () => "LABEL",
            getValue: () => "",
            getValues: () => [{ value: "1", label: "one" }, { value: "2", label: "two" }],
            id: "ID",
            setValue: (input: string) => input,
        };

        const select = create(
            <Select {...props} />,
        );
        expect(select.root.findAll((el) => el.type === "option").length).toBe(3);
        expect(select.root.findAll(
            (el) => el.type === "option" && el.props.selected === true && el.props.disabled === true).length).toBe(1);
        expect(select.root.findAll(
            (el) => el.type === "option").length).toBe(3);
        expect(select.toJSON()).toMatchSnapshot();

    });

    it("should render and have no errors and option selected", () => {
        const props: ISelectProps = {
            getLabel: () => "LABEL",
            getValue: () => "1",
            getValues: () => [{ value: "1", label: "one" }, { value: "2", label: "two" }],
            id: "ID",
            setValue: (input: string) => input,
        };

        const select = create(
            <Select {...props} />,
        );
        expect(select.root.findAll((el) => el.type === "option").length).toBe(2);
        expect(select.root.findAll((el) => el.type === "option" && el.props.selected === true).length).toBe(1);
        expect(select.toJSON()).toMatchSnapshot();

    });

    it("value change should work", () => {
        let selectValue = "";
        const props: ISelectProps = {
            getLabel: () => "LABEL",
            getValue: () => selectValue,
            getValues: () => [{ value: "1", label: "one" }, { value: "2", label: "two" }],
            id: "ID",
            setValue: (value: string) => selectValue = value,
        };

        const select = create(
            <Select {...props} />,
        );
        expect(select.root.findAll(
            (el) => el.type === "option" && el.props.selected === true && el.props.disabled === true).length).toBe(1);

        expect(select.root.findAll((el) => el.type === "option" && el.props.selected === true).length).toBe(1);
        const selectInstance = select.root.find((el) => el.type === "select");
        selectInstance.props.onChange({ currentTarget: { value: "2" } });
        select.update(
            <Select {...props} />,
        );
        expect(select.root.findAll((el) => el.type === "option" && el.props.selected === true).length).toBe(1);
        expect(selectValue).toBe("2");
    });
});
