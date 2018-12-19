import { createSelector } from "reselect";
import { IStore } from "../reducers";
import { ITemplatesState } from "./reducer";
import { getActiveTemplates as getActiveTemplatesSelector } from "./selectors";

export const getTemplates = (state: IStore): ITemplatesState => state.Templates;

export const getActiveTemplates = createSelector([getTemplates], getActiveTemplatesSelector);
