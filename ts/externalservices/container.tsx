import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ExternalServicesComponent from "./component";
import { IVkGroupInfoForm } from "./types";

const mapStateToProps = (state: IStore) => {
    return state.ExternalServices;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        saveVKInfo: (channelID: string, content: IVkGroupInfoForm) => dispatch(actions.save(channelID, content)),
    };
};

const ExternalServices = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExternalServicesComponent);

export default ExternalServices;
