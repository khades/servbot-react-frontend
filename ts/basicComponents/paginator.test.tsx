import * as React from "react";
import { create } from "react-test-renderer";
import { IPaginatorProps } from "./paginator";
import Paginator from "./paginator";
describe("Paginator", () => {
    it("should properly calculate ranges", () => {
        expect(Paginator.generateButtonsRange(14, 3)).toEqual([1, 2, 3, 4, 5]);
        expect(Paginator.generateButtonsRange(14, 1)).toEqual([1, 2, 3]);
        expect(Paginator.generateButtonsRange(14, 2)).toEqual([1, 2, 3, 4]);
        expect(Paginator.generateButtonsRange(14, 6)).toEqual([4, 5, 6, 7, 8]);
        expect(Paginator.generateButtonsRange(14, 11)).toEqual([9, 10, 11, 12, 13]);
        expect(Paginator.generateButtonsRange(14, 12)).toEqual([10, 11, 12, 13, 14]);
        expect(Paginator.generateButtonsRange(14, 13)).toEqual([11, 12, 13, 14]);
        expect(Paginator.generateButtonsRange(14, 14)).toEqual([12, 13, 14]);
        expect(Paginator.generateButtonsRange(4, 1)).toEqual([1, 2, 3]);
        expect(Paginator.generateButtonsRange(4, 2)).toEqual([1, 2, 3, 4]);
        expect(Paginator.generateButtonsRange(4, 3)).toEqual([1, 2, 3, 4]);
        expect(Paginator.generateButtonsRange(4, 4)).toEqual([2, 3, 4]);
        expect(Paginator.generateButtonsRange(3, 1)).toEqual([1, 2, 3]);
        expect(Paginator.generateButtonsRange(3, 2)).toEqual([1, 2, 3]);
        expect(Paginator.generateButtonsRange(3, 3)).toEqual([1, 2, 3]);
        expect(Paginator.generateButtonsRange(2, 1)).toEqual([1, 2]);
        expect(Paginator.generateButtonsRange(2, 2)).toEqual([1, 2]);
        expect(Paginator.generateButtonsRange(1, 1)).toEqual([1]);

    });
    it("should properly render for page 1 and pages 14", () => {
        const props: IPaginatorProps = {
            page: 1,
            pages: 14,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });
    it("should properly render for page 3 and pages 14", () => {
        const props: IPaginatorProps = {
            page: 3,
            pages: 14,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
    });
    it("should properly render for page 6 and pages 14", () => {
        const props: IPaginatorProps = {
            page: 6,
            pages: 14,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });
    it("should properly render for page 11 and pages 14", () => {
        const props: IPaginatorProps = {
            page: 11,
            pages: 14,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });

    it("should properly render for page 14 and pages 14", () => {
        const props: IPaginatorProps = {
            page: 14,
            pages: 14,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });

    it("should properly render for page 1 and pages 4", () => {
        const props: IPaginatorProps = {
            page: 1,
            pages: 4,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });
    it("should properly render for page 3 and pages 4", () => {
        const props: IPaginatorProps = {
            page: 1,
            pages: 4,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });

    it("should properly render for page 1 and pages 2", () => {
        const props: IPaginatorProps = {
            page: 1,
            pages: 2,
            setPage: (input: number) => input,
        };

        const paginator = create(
            <Paginator {...props} />,
        ).toJSON();
        expect(paginator).toMatchSnapshot();
    });
    it("should properly react to numeric button presses", () => {
        const props: IPaginatorProps = {
            page: 11,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === 13);
        button.props.onClick();
        expect(props.page).toBe(13);

    });
    it("should properly react to arrow button presses - \"<\" case", () => {
        const props: IPaginatorProps = {
            page: 11,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "prev");
        button.props.onClick();
        expect(props.page).toBe(10);
    });

    it("should properly react to arrow button presses - \"<\" case, already first item", () => {
        const props: IPaginatorProps = {
            page: 1,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "prev");
        button.props.onClick();
        expect(props.page).toBe(1);
    });

    it("should properly react to arrow button presses - \"<<\" case", () => {
        const props: IPaginatorProps = {
            page: 11,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "first");
        button.props.onClick();
        expect(props.page).toBe(1);
    });

    it("should properly react to arrow button presses - \"<<\" case, already first item", () => {
        const props: IPaginatorProps = {
            page: 1,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "first");
        button.props.onClick();
        expect(props.page).toBe(1);
    });

    it("should properly react to arrow button presses - \">\" case", () => {
        const props: IPaginatorProps = {
            page: 11,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "next");
        button.props.onClick();
        expect(props.page).toBe(12);
    });

    it("should properly react to arrow button presses - \">\" case, already last item", () => {
        const props: IPaginatorProps = {
            page: 14,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "next");
        button.props.onClick();
        expect(props.page).toBe(14);
    });

    it("should properly react to arrow button presses - \">>\" case", () => {
        const props: IPaginatorProps = {
            page: 11,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "last");
        button.props.onClick();
        expect(props.page).toBe(14);
    });

    it("should properly react to arrow button presses - \">>\" case, already last item", () => {
        const props: IPaginatorProps = {
            page: 141,
            pages: 14,
            setPage: (value: number) => { props.page = value; },
        };

        const paginator = create(
            <Paginator {...props} />,
        ).root;
        const button = paginator.find((el) => el.props["data-value"] === "last");
        button.props.onClick();
        expect(props.page).toBe(14);
    });
});
