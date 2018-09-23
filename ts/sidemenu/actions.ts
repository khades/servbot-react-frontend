export enum actiontypes {
    SHOW= "SIDEMENU/SHOW",
    HIDE= "SIDEMENU/HIDE",
}

export interface ISideMenuShowAction {
    type: actiontypes.SHOW;
}

export interface ISideMenuHideAction {
    type: actiontypes.HIDE;
}

export type SideMenuActions = ISideMenuShowAction
    | ISideMenuHideAction;
