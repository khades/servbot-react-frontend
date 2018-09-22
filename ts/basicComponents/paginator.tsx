import classnames from "classnames";
import * as React from "react";
import "../../scss/modules/_paginator.scss";

export interface IPaginatorProps {
    getPages: () => number;
    getPage: () => number;
    setPage: (page: number) => void;
}

export interface IPaginatorState {
    lastPage: boolean;
    firstPage: boolean;
    page: number;
    pages: number;
}

export default class Paginator extends React.Component<IPaginatorProps, IPaginatorState> {

    public static getDerivedStateFromProps(props: IPaginatorProps, state: IPaginatorState) {
        return {
            firstPage: props.getPage() === 1,
            lastPage: props.getPage() === props.getPages(),
            page: props.getPage(),
            pages: props.getPages(),
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
        this.generatePrevButtons = this.generatePrevButtons.bind(this);
        this.generateNextButtons = this.generateNextButtons.bind(this);
        this.generateButtons = this.generateButtons.bind(this);
        this.generateButton = this.generateButton.bind(this);

        this.state = {
            firstPage: props.getPage() === 1,
            lastPage: props.getPage() === props.getPages(),
            page: props.getPage(),
            pages: props.getPages(),
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

    private generateButtons() {
        const pages = Paginator.generateButtonsRange(this.state.pages, this.state.page);
        return (
            <React.Fragment>
                {pages.map((page) => this.generateButton(page))}
            </React.Fragment>
        );
    }

    private generateButton(value: number) {
        const classes = classnames({
            "paginator__item": true,
            "paginator__item--desktop": true,
            "paginator__item--selected": this.state.page === value,
        });
        const onclick = () => {
            this.props.setPage(value);
        };
        return (
            <div className={classes} onClick={onclick}>
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
                <div className={firstButtonClasses} onClick={this.goToFirst}>
                    <div className="paginator__item-content">
                        "❮❮"
                    </div>
                </div>
                <div className={prevButtonClasses} onClick={this.goToPrevious}>
                    <div className="paginator__item-content">
                        "❮"
                    </div>
                </div>
            </React.Fragment>
        );
    }
    private generateNextButtons() {
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
                <div className={nextButtonClasses} onClick={this.goToNext}>
                    <div className="paginator__item-content">
                        "❯"
                    </div>
                </div>
                <div className={lastButtonClasses} onClick={this.goToLast}>
                    <div className="paginator__item-content">
                        "❯❯"
                    </div>
                </div>

            </React.Fragment>
        );
    }

    private goToNext() {
        if (this.state.lastPage !== true) {
            this.props.setPage(this.state.page + 1);
        }
    }

    private goToLast() {
        if (this.state.lastPage !== true) {
            this.props.setPage(this.state.pages);
        }
    }

    private goToFirst() {
        if (this.state.firstPage !== true) {
            this.props.setPage(1);
        }
    }

    private goToPrevious() {
        if (this.state.firstPage !== true) {
            this.props.setPage(this.state.pages - 1);
        }
    }
}
