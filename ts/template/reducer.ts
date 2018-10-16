import { ITemplateHistory, ITemplateWithHistory } from "../api/types";
import States from "../utils/states";
import { actiontypes, TemplateAction } from "./actions";

export interface ITemplateState {
    channelID: string;
    commandName: string;
    hasTemplateError: boolean;
    isAliasTo: boolean;
    state: States;
    template: ITemplateWithHistory;
}

const initialState: ITemplateState = {
    channelID: "",
    commandName: "",
    hasTemplateError: false,
    isAliasTo: false,
    state: States.NOTINITIATED,
    template: {
        aliasTo: "",
        channelID: "",
        commandName: "",
        history: [],
        template: "",
    },
};

const reducer = (state: ITemplateState = initialState, action: TemplateAction): ITemplateState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                state: States.LOADING,
            });
        case actiontypes.OFFLINE:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                state: States.OFFLINE,
            });
        case actiontypes.READY:
            const template = action.payload.template;
            const isAliasTo = template.aliasTo !== "" && template.aliasTo !== template.commandName;
            return {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                isAliasTo,
                state: States.READY,
                template,
            };
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                state: States.NOTAUTHORIZED,
            });
        case actiontypes.FORBIDDEN:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                state: States.FORBIDDEN,
            });
        case actiontypes.SAVE:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                state: States.UPDATING,
            });
        case actiontypes.SETALIASTO:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: false,
                state: States.UPDATING,
            });
        case actiontypes.AFTERSAVEERROR:
            return Object.assign({}, state, {
                channelID: action.payload.channelID,
                commandName: action.payload.commandName,
                hasTemplateError: true,
                state: States.READY,
            });
        // case actiontypes.AFTERSAVESUCCESS:
        //     return Object.assign({}, state, {
        //         channelID: action.payload.channelID,
        //         commandName: action.payload.commandName,
        //         hasTemplateError: false,
        //         state: States.READY,
        //     });
        default:
            return state;
    }
};

export default reducer;
