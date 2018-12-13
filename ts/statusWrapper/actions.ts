import States from "../utils/states";

export enum actiontypes {
    SETSTATE = "STATUSWRAPPER/SETSTATE",
}

export interface IStatusWrapperSetState {
    type: actiontypes.SETSTATE;
    payload: States;
}

export type StatusWrapperAction = IStatusWrapperSetState;
