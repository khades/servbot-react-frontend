import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubAlertsComponent from "./component";
import { ISubAlerts } from "./types";

const mapStateToProps = (state: IStore) => {
    return state.subAlerts;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) =>
            dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        save: (channelID: string, content: ISubAlerts) => {
            dispatch(actions.save(channelID, content));
        },
        setExtended: () =>
            dispatch(actions.setExtended),
    };
};

const SubAlerts = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubAlertsComponent);

export default SubAlerts;
