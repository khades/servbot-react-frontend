import { ITemplate } from "../api/types";
import States from "../utils/states";
import { actiontypes, TemplatesAction } from "./actions";
import { processMustacheTemplate } from "./utils";

export interface ITemplateState {
    channelID: string;
    goToValue: string;
    showGoTo: boolean;
    showNonEmpty: boolean;
    state: States;
    templates?: IMustacheTemplate[];
}

export interface IMustacheTemplate extends ITemplate {
    mustacheBody: string[];
}

const initialState = {
    channelID: "",
    goToValue: "",
    showGoTo: false,
    showNonEmpty: true,
    state: States.NOTINITIATED,
};

const reducer = (state: ITemplateState = initialState, action: TemplatesAction): ITemplateState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return {
                channelID: action.payload.channelID,
                goToValue: "",
                showGoTo: false,
                showNonEmpty: true,
                state: States.LOADING,
            };
        case actiontypes.OFFLINE:
            return {
                channelID: action.payload.channelID,
                goToValue: "",
                showGoTo: false,
                showNonEmpty: true,
                state: States.OFFLINE,
            };
        case actiontypes.READY:
            return {
                channelID: action.payload.channelID,
                goToValue: "",
                showGoTo: false,
                showNonEmpty: true,
                state: States.READY,
                templates: action.payload.content.map(processMustacheTemplate),
            };
        case actiontypes.NOTAUTHORIZED:
            return {
                channelID: action.payload.channelID,
                goToValue: "",
                showGoTo: false,
                showNonEmpty: true,
                state: States.NOTAUTHORIZED,
            };
        case actiontypes.SHOWALL:
            return Object.assign({}, state, { showNonEmpty: false });
        case actiontypes.SHOWNONEMPTY:
            return Object.assign({}, state, { showNonEmpty: true });
        case actiontypes.SHOWGOTO:
            return Object.assign({}, state, { showGoTo: true });
        case actiontypes.SHOWTEMPLATES:
            return Object.assign({}, state, { showGoTo: false });
        case actiontypes.SETGOTO:
            return Object.assign({}, state, { goToValue: action.payload });
        default:
            return state;
    }
};

export default reducer;
