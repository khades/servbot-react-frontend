import States from "../utils/states";
import { actiontypes, StatusWrapperAction } from "./actions";
export interface IStatusWrapperState {
    state: States;
}

const initialState = {
    state: States.LOADING,
};

const reducer = (state: IStatusWrapperState = initialState, action: StatusWrapperAction): IStatusWrapperState => {
    switch (action.type) {
        case actiontypes.SETSTATE:
            return { state: action.payload };
        default:
            return state;
    }
};

export default reducer;
