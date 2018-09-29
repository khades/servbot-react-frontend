import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import BansComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.bans;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
    };
};

const Bans = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BansComponent);

export default Bans;
