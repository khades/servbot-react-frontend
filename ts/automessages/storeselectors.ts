import { createSelector } from "reselect";
import { IStore } from "../reducers";
import { IAutoMessagesState } from "./reducer";
import { getVisibleAutoMessages as getVisibleAutoMessagesSelector } from "./selectors";

export const getAutoMessages = (state: IStore): IAutoMessagesState => state.AutoMessages;

export const getVisibleAutoMessages =
    createSelector([getAutoMessages], getVisibleAutoMessagesSelector);
