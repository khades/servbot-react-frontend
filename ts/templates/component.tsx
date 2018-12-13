import classnames from "classnames";
import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "../../scss/modules/_mustache.scss";
import "../../scss/modules/_template-item";
import "../../scss/modules/_templates";
import Input from "../basicComponents/input";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import StatusWrapper from "../statusWrapper/container";
import { IMustacheTemplate, ITemplatesState } from "./reducer";

export interface ITemplatesProps extends RouteComponentProps<IChannelRoute>, ITemplatesState {
    fetchData: (channelID: string, username?: string) => void;
    isModOnChannel: boolean;
    setShowAll: () => void;
    setShowNonEmpty: () => void;
    setShowGoTo: () => void;
    setShowTemplates: () => void;
    setGoTo: (value: string) => void;
    reset: () => void;
}

export default class TemplatesComponent extends React.PureComponent<ITemplatesProps, {}> {
    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ITemplatesProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public componentWillUnmount() {
        this.props.reset();
    }

    public render = () => (
        <StatusWrapper state={this.props.state}>
            <div className="templates">
                <hgroup className="templates__hgroup">
                    <div className="templates__header">
                        {l10n.formatString(l10n.TEMPLATES_TITLE, this.renderChannelName())}
                    </div>
                    {this.generateShowTemplatesButton()}
                    {this.generateButtons()}
                </hgroup>
                {this.generateTemplates()}
                {this.generateGoTo()}
            </div>
        </StatusWrapper>
    )

    private generateButtons = () => {
        if (this.props.isModOnChannel === false || this.props.showGoTo === true) {
            return null;
        }
        return (
            <div className="templates__header-buttons">
                {this.generateShowGoToButton()}
                {this.generateShowAllButton()}
                {this.generateShowNonEmptyButton()}
            </div>
        );
    }

    private generateShowGoToButton = () => (
        <div onClick={this.props.setShowGoTo} className="templates__header-button templates__header-button--create">
            {l10n.TEMPLATES_NEW}
        </div>
    )

    private generateShowTemplatesButton = () => {
        if (this.props.showGoTo === false) {
            return null;
        }
        return (
            <div className="templates__header-buttons">
                <div
                    onClick={this.props.setShowTemplates}
                    className="templates__header-button templates__header-button--list"
                >
                    {l10n.TEMPLATES_LIST}
                </div>
            </div>

        );
    }
    private generateShowAllButton = () => {
        if (this.props.showNonEmpty === true) {
            return (
                <div onClick={this.props.setShowAll} className="templates__header-button">
                    {l10n.TEMPLATES_SHOW_ALL}
                </div>
            );
        }
    }

    private generateShowNonEmptyButton = () => {
        if (this.props.showNonEmpty === false) {
            return (
                <div onClick={this.props.setShowNonEmpty} className="templates__header-button">
                    {l10n.TEMPLATES_SHOW_ACTIVE}
                </div>
            );
        }
    }

    private generateGoTo = () => {
        if (this.props.isModOnChannel === false || this.props.showGoTo === false) {
            return null;
        }
        return (
            <React.Fragment>
                <Input
                    value={this.props.goToValue}
                    setValue={this.props.setGoTo}
                    id="gotovalue"
                    label={l10n.TEMPLATES_CREATE_GOTO}
                />
                {this.generateGoToLink()}
            </React.Fragment>
        );
    }

    private generateGoToLink = () => {
        if (this.props.goToValue === "") {
            return null;
        }
        return (
            <div>
                <Link
                    className="templates__goto-command"
                    to={Routes.ToTemplate(this.props.match.params.channelID, this.props.goToValue)}
                >
                    {l10n.PROCEED}
                </Link>
            </div>
        );
    }

    private generateTemplates = () => {
        if (!this.props.templates || this.props.templates.length === 0 || this.props.showGoTo === true) {
            return null;
        }
        if (this.props.showNonEmpty === true) {
            return (
                <div className="templates__container">
                    {this.props.templates.filter((template) => template.template !== "").map(this.generateTemplate)}
                </div>
            );
        }
        return (
            <div className="templates__container">
                {this.props.templates.map(this.generateTemplate)}
            </div>
        );
    }

    private generateTemplate = (template: IMustacheTemplate) => {
        if (template.commandName === "") {
            return null;
        }
        const isAlias = template.aliasTo !== "" && template.aliasTo !== template.commandName;
        const isEmpty = template.template === "";
        const templateclassnames = classnames({
            "template-item": true,
            "template-item--alias": isAlias,
        });
        return (
            <Link
                key={template.commandName}
                className={templateclassnames}
                to={Routes.ToTemplate(this.props.match.params.channelID, template.commandName)}
            >
                <div className="template-item__header">
                    <div className="template-item__name">
                        {template.commandName}
                    </div>
                    <div className="template-item__type">
                        {this.generateTemplateType(isEmpty, isAlias)}
                    </div>
                </div>
                {this.generateTemplateBody(template, isEmpty, isAlias)}
            </Link>
        );
    }

    private generateTemplateBody = (template: IMustacheTemplate, isEmpty: boolean, isAlias: boolean) => {
        if (isEmpty === true) {
            return null;
        }
        return (
            <div className="template-item__body">
                {isAlias === true && template.aliasTo}
                {isAlias !== true && template.mustacheBody.map(this.generateMustachedTemplateBody)}
            </div>
        );
    }
    private generateMustachedTemplateBody = (line: string, index: number) => {
        if (line.startsWith("|mustache|")) {
            const rawLine = line.replace("|mustache|", "");
            if (rawLine.startsWith("\/")) {
                return (
                    <span key={index} className="mustache mustache__end-if" />
                );
            }
            if (rawLine.startsWith("\#")) {
                return (
                    <span key={index} className="mustache mustache__start-if-true">
                        {rawLine.replace("\#", "")}
                    </span>
                );
            }
            if (rawLine.startsWith("\^")) {
                return (
                    <span key={index} className="mustache mustache__start-if-false">
                        {rawLine.replace("\^", "")}
                    </span>
                );
            }
            return (
                <span key={index} className="mustache mustache__variable">{rawLine}</span>
            );
        } else {
            return (
                <React.Fragment key={index}>
                    {line.trim()}
                </React.Fragment>
            );
        }
    }

    private generateTemplateType = (isEmpty: boolean, isAlias: boolean) => {
        if (isEmpty === true) {
            return l10n.DELETED;
        }
        if (isAlias === true) {
            return l10n.ALIAS;
        }
        return l10n.COMMAND;
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
