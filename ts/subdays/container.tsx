import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubDaysComponent, { ISubDaysDispatchProps, ISubDaysOwnProps } from "./component";
import { ISubDaysState } from "./reducer";

const mapStateToProps = (state: IStore, ownProps: ISubDaysOwnProps): ISubDaysState => {
    return state.SubDays;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ISubDaysOwnProps): ISubDaysDispatchProps => {
    return {
        createNewSubDay: (channelID: string, name: string, subsOnly: boolean) => {
            dispatch(actions.create(channelID, name, subsOnly, ownProps.history));
        },
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        setHideCreationPanel: () => dispatch(actions.hideCreationPanel),
        setShowCreationPanel: () => dispatch(actions.showCreationPanel),
    };
};

const SubDays = connect<ISubDaysState, ISubDaysDispatchProps, ISubDaysOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(SubDaysComponent);

export default SubDays;
