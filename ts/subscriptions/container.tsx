import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubscriptionsComponent, { ISubscriptionsDispatchProps, ISubscriptionsOwnProps } from "./component";
import { ISubscriptionsState } from "./reducer";

const mapStateToProps = (state: IStore, ownProps: ISubscriptionsOwnProps): ISubscriptionsState => {
    return state.Subscriptions;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ISubscriptionsOwnProps): ISubscriptionsDispatchProps => {
    return {
        fetchData: (channelID: string, limit?: number) => dispatch(actions.get(channelID, true, limit)),
        fetchDataWithoutRefresh: (channelID: string, limit?: number) =>
            dispatch(actions.get(channelID, false, limit)),
        reset: () => dispatch(actions.reset),
        setBookmark: (channelID: string, id: string) => dispatch(actions.setBookmark(channelID, id)),
        setLimit: (channelID: string, limit: number) => dispatch(actions.setLimit(channelID, limit)),
    };
};

const Subscriptions = connect<ISubscriptionsState, ISubscriptionsDispatchProps, ISubscriptionsOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(SubscriptionsComponent);

export default Subscriptions;
