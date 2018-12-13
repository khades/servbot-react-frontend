import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import States from "../utils/states";
import * as actions from "./actioncreators";
import StatusWrapperComponent from "./component";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setState: (state: States) => dispatch(actions.setState(state)),
    };
};

const StatusWrapper = connect(
    null,
    mapDispatchToProps,
)(StatusWrapperComponent);

export default StatusWrapper;
