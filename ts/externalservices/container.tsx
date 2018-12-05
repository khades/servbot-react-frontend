import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IVkGroupInfoForm } from "../api/types";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ExternalServicesComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return state.ExternalServices;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        saveVKInfo: (channelID: string, content: IVkGroupInfoForm) => dispatch(actions.save(channelID, content)),
    };
};

const ExternalServices = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExternalServicesComponent);

export default ExternalServices;
