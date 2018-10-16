import { actiontypes, SideMenuAction } from "./actions";

export enum SideMenuStates {
    INIT = "INIT",
    HIDDEN = "HIDDEN",
    SHOWN = "SHOWN",
}

export interface ISideMenuState {
    state: SideMenuStates;
}

const reducer = (state: ISideMenuState = { state: SideMenuStates.INIT }, action: SideMenuAction): ISideMenuState => {
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
