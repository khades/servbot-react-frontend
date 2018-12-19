import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubAlertsComponent, { ISubAlertsDispatchProps, ISubAlertsOwnProps } from "./component";
import { ISubAlertsState } from "./reducer";
import { ISubAlerts } from "./types";

const mapStateToProps = (state: IStore, ownProps: ISubAlertsOwnProps): ISubAlertsState => {
    return state.SubAlerts;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ISubAlertsOwnProps): ISubAlertsDispatchProps => {
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

const SubAlerts = connect<ISubAlertsState, ISubAlertsDispatchProps, ISubAlertsOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(SubAlertsComponent);

export default SubAlerts;
