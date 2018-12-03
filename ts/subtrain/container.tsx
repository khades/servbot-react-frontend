import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ISubTrainForm } from "../api/types";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubTrainComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.SubTrain;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        saveData: (channelID: string, content: ISubTrainForm) => dispatch(actions.save(channelID, content)),

    };
};

const SubTrain = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubTrainComponent);

export default SubTrain;
