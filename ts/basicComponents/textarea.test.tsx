import * as React from "react";
import { create } from "react-test-renderer";
import { IInputProps } from "./input";
import Textarea from "./textarea";

describe("Textarea", () => {
    it("value change should work", () => {
        let inputValue = "";
        const props: IInputProps = {
            id: "ID",
            label: "LABEL",
            setValue: (value: string) => inputValue = value,
            value: inputValue,

        };

        const input = create(
            <Textarea {...props} />,
        );

        const inputInstance = input.root.find((el) => el.type === "textarea");
        inputInstance.props.onChange({ currentTarget: { value: "2" } });
        input.update(
            <Textarea {...props} />,
        );
        expect(inputValue).toBe("2");
    });
    it("inital value should be properly set", () => {
        const props: IInputProps = {
            id: "ID",
            label: "LABEL",
            setValue: (value: string) => value,
            value: "testValue",

        };

        const input = create(
            <Textarea {...props} />,
        );
        expect(input.toJSON()).toMatchSnapshot();
        const inputInstance = input.root.find((el) => el.type === "textarea");
        expect(inputInstance.props.value).toBe("testValue");
    });
});
