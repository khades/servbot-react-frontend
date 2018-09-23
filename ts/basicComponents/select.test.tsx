import * as React from "react";
import { create } from "react-test-renderer";
import Select, { ISelectProps } from "./select";

describe("Select", () => {
    it("should render and have no errors and no options selected", () => {
        const props: ISelectProps = {
            getValue: () => "",
            getValues: () => [{ value: "1", label: "one" }, { value: "2", label: "two" }],
            id: "ID",
            label: "LABEL",
            setValue: (input: string) => input,
        };

        const select = create(
            <Select {...props} />,
        );
        expect(select.root.findAll((el) => el.type === "option").length).toBe(3);
        expect(select.root.findAll(
            (el) => el.type === "option" && el.props.disabled === true).length).toBe(1);
        expect(select.root.findAll(
            (el) => el.type === "option").length).toBe(3);
        expect(select.toJSON()).toMatchSnapshot();

    });

    it("should render and have no errors and option selected", () => {
        const props: ISelectProps = {
            getValue: () => "1",
            getValues: () => [{ value: "1", label: "one" }, { value: "2", label: "two" }],
            id: "ID",
            label: "LABEL",
            setValue: (input: string) => input,
        };

        const select = create(
            <Select {...props} />,
        );
        expect(select.root.findAll((el) => el.type === "option").length).toBe(2);
        expect(select.toJSON()).toMatchSnapshot();

    });

    it("value change should work", () => {
        let selectValue = "";
        const props: ISelectProps = {
            getValue: () => selectValue,
            getValues: () => [{ value: "1", label: "one" }, { value: "2", label: "two" }],
            id: "ID",
            label: "LABEL",
            setValue: (value: string) => selectValue = value,
        };

        const select = create(
            <Select {...props} />,
        );
        expect(select.root.findAll(
            (el) => el.type === "option" && el.props.disabled === true).length).toBe(1);

        expect(select.root.findAll((el) => el.type === "option").length).toBe(3);
        const selectInstance = select.root.find((el) => el.type === "select");
        selectInstance.props.onChange({ currentTarget: { value: "2" } });
        select.update(
            <Select {...props} />,
        );
        expect(select.root.findAll((el) => el.type === "option").length).toBe(2);
        expect(selectValue).toBe("2");
    });
});
