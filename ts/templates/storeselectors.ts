import { createSelector } from "reselect";
import { IStore } from "../reducers";
import { ITemplatesState } from "./reducer";
import { getActiveTemplates as getActiveTemplatesSelector } from "./selectors";

export const getTemplates = (state: IStore): ITemplatesState => state.templates;

export const getActiveTemplates = createSelector([getTemplates], getActiveTemplatesSelector);
