import * as React from "react";
import { create } from "react-test-renderer";
import Input, { IInputProps } from "./input";

describe("Input", () => {
    it("value change should work", () => {
        let inputValue = "";
        const props: IInputProps = {
            getValue: () => inputValue,
            id: "ID",
            label: "LABEL",
            setValue: (value: string) => inputValue = value,
        };

        const input = create(
            <Input {...props} />,
        );

        const inputInstance = input.root.find((el) => el.type === "input");
        inputInstance.props.onChange({ currentTarget: { value: "2" } });
        input.update(
            <Input {...props} />,
        );
        expect(inputValue).toBe("2");
    });
    it("inital value should be properly set", () => {
        const props: IInputProps = {
            getValue: () => "testValue",
            id: "ID",
            label: "LABEL",
            setValue: (value: string) => value,
        };

        const input = create(
            <Input {...props} />,
        );
        expect(input.toJSON()).toMatchSnapshot();

        const inputInstance = input.root.find((el) => el.type === "input");
        expect(inputInstance.props.defaultValue).toBe("testValue");
    });
});
