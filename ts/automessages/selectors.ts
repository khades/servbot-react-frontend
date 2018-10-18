import { IAutoMessagesState } from "./reducer";

export const getVisibleAutoMessages = (state: IAutoMessagesState): IAutoMessagesState => {
    if (state.emptyShown === true || !state.content) {
        return state;
    }
    const filteredArray = state.content.filter((item) => item.message.trim() !== "");
    return Object.assign({}, state, { content: filteredArray });
};
