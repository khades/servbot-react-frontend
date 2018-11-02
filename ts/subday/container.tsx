import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubDayComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.SubDay;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        closeSubDay: (channelID: string, id: string) => dispatch(actions.close(channelID, id)),
        fetchData: (channelID: string, id: string) => dispatch(actions.get(channelID, id)),
        pickSubDayNonSubWinner: (channelID: string, id: string) => dispatch(actions.pickNonSubWinner(channelID, id)),
        pickSubDaySubWinner: (channelID: string, id: string) => dispatch(actions.pickSubWinner(channelID, id)),
        pickSubDayWinner: (channelID: string, id: string) => dispatch(actions.pickWinner(channelID, id)),
        pullSubDayWinner: (channelID: string, id: string, user: string) =>
            dispatch(actions.pullWinner(channelID, id, user)),
    };
};

const SubDay = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubDayComponent);

export default SubDay;
