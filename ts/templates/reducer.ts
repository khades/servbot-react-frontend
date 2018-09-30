import { ITemplate } from "../api/types";
import States from "../utils/states";
import { actiontypes, TemplatesAction } from "./actions";

export interface ITemplateState {
    channelID: string;
    showNonEmpty: boolean;
    state: States;
    templates?: ITemplate[];
}

const initialState = {
    channelID: "",
    filter: "commands",
    showNonEmpty: true,
    state: States.NOTINITIATED,
};

const reducer = (state: ITemplateState = initialState, action: TemplatesAction): ITemplateState => {
    switch (action.type) {
        case actiontypes.LOADING:
            return Object.assign({}, {
                channelID: action.payload.channelID,
                showNonEmpty: true,
            }, { state: States.LOADING });
        case actiontypes.READY:
            return Object.assign({}, {
                channelID: action.payload.channelID,
                showNonEmpty: true,
                templates: action.payload.content,
            }, { state: States.READY });
        case actiontypes.NOTAUTHORIZED:
            return Object.assign({}, {
                channelID: action.payload.channelID,
                showNonEmpty: true,
            }, { state: States.NOTAUTHORIZED });
        default:
            return state;
    }
};

export default reducer;
