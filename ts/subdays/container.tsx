import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubDaysComponent, { ISubDaysProps } from "./component";

const mapStateToProps = (state: IStore) => {
    return state.SubDays;
};

const mapDispatchToProps = (dispatch: Dispatch, props: ISubDaysProps) => {
    return {
        createNewSubDay: (channelID: string, name: string, subsOnly: boolean) => {
            dispatch(actions.create(channelID, name, subsOnly, props.history));
        },
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        setHideCreationPanel: () => dispatch(actions.hideCreationPanel),
        setShowCreationPanel: () => dispatch(actions.showCreationPanel),
    };
};

const SubDays = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubDaysComponent);

export default SubDays;
