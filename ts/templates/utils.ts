import { ITemplate } from "../template/types";
import { IMustacheTemplate } from "./reducer";

export const processMustacheTemplate = (template: ITemplate): IMustacheTemplate => {
    if (template.template === "" || (template.aliasTo !== "" && template.aliasTo !== template.commandName)) {
        return Object.assign(template, { mustacheBody: [] });
    }
    const mustacheBody = template.template.replace(/{ /gi, "{")
        .replace(/ }/gi, "}")
        .replace(/{{{/gi, "{{")
        .replace(/}}}/gi, "}}")
        .replace(/}}/g, "|delimiter|")
        .replace(/{{/g, "|delimiter||mustache|")
        .split("|delimiter|")
        .filter((f) => f !== "");
    return Object.assign(template, { mustacheBody });
};
