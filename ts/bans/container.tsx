import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import IChannelRoute from "../channel/types";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import BansComponent, { IBansDispatchedProps, IBansOwnProps } from "./component";
import { IBansState } from "./reducer";

const mapStateToProps = (state: IStore, ownProps: IBansOwnProps): IBansState => {
    return state.Bans;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IBansOwnProps): IBansDispatchedProps => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
    };
};

const Bans = connect<IBansState, IBansDispatchedProps, IBansOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(BansComponent);

export default Bans;
