import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import SubscriptionsComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.Subscriptions;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, limit?: number) => dispatch(actions.get(channelID, true, limit)),
        fetchDataWithoutRefresh: (channelID: string, limit?: number) => dispatch(actions.get(channelID, false, limit)),
        setBookmark: (channelID: string, id: string) => dispatch(actions.setBookmark(channelID, id)),
        setLimit: (channelID: string, limit: number) => dispatch(actions.setLimit(channelID, limit)),
    };
};

const Subscriptions = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubscriptionsComponent);

export default Subscriptions;
