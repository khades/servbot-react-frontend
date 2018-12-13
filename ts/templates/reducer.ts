import { ITemplate } from "../template/types";
import States from "../utils/states";
import { actiontypes, TemplatesAction } from "./actions";
import { processMustacheTemplate } from "./utils";

export interface ITemplatesState {
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

const reducer = (state: ITemplatesState = initialState, action: TemplatesAction): ITemplatesState => {
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
        case actiontypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
