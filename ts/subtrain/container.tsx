import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubTrainComponent from "./component";
import { ISubTrainForm } from "./types";

const mapStateToProps = (state: IStore) => {
    return state.SubTrain;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        saveData: (channelID: string, content: ISubTrainForm) => dispatch(actions.save(channelID, content)),
    };
};

const SubTrain = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubTrainComponent);

export default SubTrain;
