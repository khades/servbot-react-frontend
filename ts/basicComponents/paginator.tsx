import classnames from "classnames";
import * as React from "react";

export interface IPaginatorState {
    lastPage: boolean;
    firstPage: boolean;
}

export interface IPaginatorProps {
    pages: number;
    page: number;
    setPage: (page: number) => void;
}

export default class Paginator extends React.Component<IPaginatorProps, IPaginatorState> {
    public static getDerivedStateFromProps(props: IPaginatorProps, state: IPaginatorState) {
        return {
            firstPage: props.page === 1,
            lastPage: props.page === props.pages,
        };
    }

    public static generateButtonsRange(pages: number, page: number) {
        const paginatorRange: number = 2;
        const messedPages = [
            paginatorRange - 2,
            paginatorRange - 1,
            paginatorRange,
            paginatorRange + 1,
            paginatorRange + 2];
        return messedPages
            .map((f) => page - paginatorRange + f)
            .filter((f) => f > 0 && f < pages + 1);
    }

    constructor(props: IPaginatorProps) {
        super(props);

        this.state = {
            firstPage: props.page === 1,
            lastPage: props.page === props.pages,

        };
    }

    public render() {
        return (
            <div className="paginator">
                {this.generatePrevButtons()}
                {this.generateButtons()}
                {this.generateNextButtons()}
            </div>
        );
    }

    private generateButtons = () => {
        const pages = Paginator.generateButtonsRange(this.props.pages, this.props.page);
        return (
            <React.Fragment>
                {pages.map((page) => this.generateButton(page))}
            </React.Fragment>
        );
    }

    private generateButton = (value: number) => {
        const classes = classnames({
            "paginator__item": true,
            "paginator__item--desktop": true,
            "paginator__item--selected": this.props.page === value,
        });
        const onclick = () => {
            this.props.setPage(value);
        };
        return (
            <div className={classes} data-value={value} key={value.toString()} onClick={onclick}>
                <div className="paginator__item-content">
                    {value.toString()}
                </div>
            </div>
        );
    }
    private generatePrevButtons() {
        const firstButtonClasses = classnames({
            "paginator__item": true,
            "paginator__item--desktop": true,
            "paginator__item--selected": this.state.firstPage,
        });

        const prevButtonClasses = classnames({
            "paginator__item": true,
            "paginator__item--inactive": this.state.firstPage,
        });

        return (
            <React.Fragment>
                <div className={firstButtonClasses} data-value={"first"} key="first" onClick={this.goToFirst}>
                    <div className="paginator__item-content">
                        "❮❮"
                    </div>
                </div>
                <div
                    className={prevButtonClasses}
                    data-value={"prev"}
                    key="prev"
                    onClick={this.goToPrevious}
                >
                    <div className="paginator__item-content">
                        "❮"
                    </div>
                </div>
            </React.Fragment>
        );
    }
    private generateNextButtons = () => {
        const lastButtonClasses = classnames({
            "paginator__item": true,
            "paginator__item--desktop": true,
            "paginator__item--selected": this.state.lastPage,
        });

        const nextButtonClasses = classnames({
            "paginator__item": true,
            "paginator__item--inactive": this.state.lastPage,
        });

        return (
            <React.Fragment>
                <div
                    className={nextButtonClasses}
                    data-value={"next"}
                    key="next"
                    onClick={this.goToNext}
                >
                    <div className="paginator__item-content">
                        "❯"
                    </div>
                </div>
                <div
                    className={lastButtonClasses}
                    data-value={"last"}
                    key="last"
                    onClick={this.goToLast}
                >
                    <div className="paginator__item-content">
                        "❯❯"
                    </div>
                </div>

            </React.Fragment >
        );
    }

    private goToNext = () => {
        if (this.state.lastPage !== true) {
            this.props.setPage(this.props.page + 1);
        }
    }

    private goToLast = () => {
        if (this.state.lastPage !== true) {
            this.props.setPage(this.props.pages);
        }
    }

    private goToFirst = () => {
        if (this.state.firstPage !== true) {
            this.props.setPage(1);
        }
    }

    private goToPrevious = () => {
        if (this.state.firstPage !== true) {
            this.props.setPage(this.props.page - 1);
        }
    }
}
