import { IMustacheTemplate, ITemplatesState } from "./reducer";

const isActiveTemplate = (template: IMustacheTemplate): boolean => {
    if (template.template === "") {
        return false;
    }
    if (template.aliasTo !== "" && template.aliasTo !== template.commandName) {
        return false;
    }
    return true;
};

export const getActiveTemplates = (state: ITemplatesState): string[] => {
    if (state.templates) {
        return state.templates.filter(isActiveTemplate).map((item) => item.commandName);
    }
    return [];
};
