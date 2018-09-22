import * as React from "react";
import { create } from "react-test-renderer";
import ControlGroup, { IControlGroupProps } from "./control-group";

describe("Control Group", () => {
    it("should render and have no errors", () => {
        const props: IControlGroupProps = {
            getLabel: () => "LABEL",
            id: "ID",
        };
        const TestComponent: React.SFC<{}> = () => (
            <div className="testComponent" />
        );
        const controlGroup = create(
            <ControlGroup {...props}>
                <TestComponent />
            </ControlGroup>,
        ).root;
        expect(controlGroup.findAll((el) => el.props.className === "control-group__errors").length).toBe(0);
        expect(controlGroup.findAll((el) => el.props.className === "control-group--error").length).toBe(0);
        expect(controlGroup.findByType(TestComponent)).toBeDefined();
        expect(controlGroup.findAll(
            (el) => el.props.className === "control-group__label" && el.children && el.children[0] === "LABEL",
        ).length).toBe(1);

        expect(controlGroup.findAll(
            (el) => el.props.className === "control-group__label" && el.props.htmlFor === "ID",
        ).length).toBe(1);
    });

    it("should render and have errors", () => {
        const props: IControlGroupProps = {
            getErrors: () => ["1", "2"],
            getLabel: () => "LABEL",
            id: "ID",
        };

        const controlGroup = create(
            <ControlGroup {...props} />,
        ).root;
        expect(controlGroup.findAll((el) => el.props.className === "control-group__errors").length).toBe(1);
        expect(controlGroup.findAll(
            (el) => el.props.className === "control-group control-group--error").length).toBe(1);
        expect(controlGroup.findAll(
            (el) => el.props.className === "control-group__errors" && el.children && el.children[0] === "1, 2",
        ).length).toBe(1);
    });
});
