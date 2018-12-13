import States from "../utils/states";
import * as actions from "./actions";

export const setState = (state: States): actions.IStatusWrapperSetState => ({
    payload: state,
    type: actions.actiontypes.SETSTATE,
});
