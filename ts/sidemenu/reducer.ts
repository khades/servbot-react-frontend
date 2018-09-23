import { actiontypes, SideMenuActions } from "./actions";

export enum SideMenuStates {
    INIT = "INIT",
    HIDDEN = "HIDDEN",
    SHOWN = "SHOWN",
}

export interface ISideMenuStore {
    state: SideMenuStates;
}

const reducer = (state: ISideMenuStore = { state: SideMenuStates.INIT }, action: SideMenuActions): ISideMenuStore => {
    switch (action.type) {
        case actiontypes.SHOW:
            return { state: SideMenuStates.SHOWN };
        case actiontypes.HIDE:
            return { state: SideMenuStates.HIDDEN };
        default:
            return state;
    }
};

export default reducer;
