import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubTrainComponent, { ISubTrainDispatchProps, ISubTrainOwnProps } from "./component";
import { ISubTrainState } from "./reducer";
import { ISubTrainForm } from "./types";

const mapStateToProps = (state: IStore, ownProps: ISubTrainOwnProps): ISubTrainState => {
    return state.SubTrain;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ISubTrainOwnProps): ISubTrainDispatchProps => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        saveData: (channelID: string, content: ISubTrainForm) => dispatch(actions.save(channelID, content)),
    };
};

const SubTrain = connect<ISubTrainState, ISubTrainDispatchProps, ISubTrainOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(SubTrainComponent);

export default SubTrain;
