import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import DonationSourcesComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.DonationSources;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
    };
};

const DonationSources = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DonationSourcesComponent);

export default DonationSources;
