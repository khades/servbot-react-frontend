
import classnames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import { l10n } from "../../l10n/l10n";
import * as Routes from "../../routes/routes";
import { IMustacheTemplate } from "../reducer";

export interface ITemplatesItem {
    template: IMustacheTemplate;
    channelID: string;
}

function generateTemplateBody(template: IMustacheTemplate, isEmpty: boolean, isAlias: boolean) {
    if (isEmpty === true) {
        return null;
    }
    return (
        <div className="template-item__body">
            {isAlias === true && template.aliasTo}
            {isAlias !== true && template.mustacheBody.map(generateMustachedTemplateBody)}
        </div>
    );
}

function generateTemplateType(isEmpty: boolean, isAlias: boolean) {
    if (isEmpty === true) {
        return l10n.DELETED;
    }
    if (isAlias === true) {
        return l10n.ALIAS;
    }
    return l10n.COMMAND;
}

function generateMustachedTemplateBody(line: string, index: number) {
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

const TemplateItem = React.memo((props: ITemplatesItem) => {
    const template = props.template;
    // TODO Move to component
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
            to={Routes.ToTemplate(props.channelID, template.commandName)}
        >
            <div className="template-item__header">
                <div className="template-item__name">
                    {template.commandName}
                </div>
                <div className="template-item__type">
                    {generateTemplateType(isEmpty, isAlias)}
                </div>
            </div>
            {generateTemplateBody(template, isEmpty, isAlias)}
        </Link>
    );
});

export default TemplateItem;
