import * as actions from "./actions";

export const show = (): actions.ISideMenuShowAction => ({
    type: actions.actiontypes.SHOW,
});

export const hide = (): actions.ISideMenuHideAction => ({
    type: actions.actiontypes.HIDE,
});
