import { connect } from "react-redux";
import { Dispatch } from "redux";
import States from "../utils/states";
import * as actions from "./actioncreators";
import StatusWrapperComponent, { IStatusWrappedDispatchedProps, IStatusWrapperOwnProps } from "./component";

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IStatusWrapperOwnProps): IStatusWrappedDispatchedProps => {
    return {
        setState: (state: States) => dispatch(actions.setState(state)),
    };
};

const StatusWrapper = connect<{}, IStatusWrappedDispatchedProps, IStatusWrapperOwnProps>(
    null,
    mapDispatchToProps,
)(StatusWrapperComponent);

export default StatusWrapper;
