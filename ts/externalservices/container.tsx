import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ExternalServicesComponent, { IExternalServicesDispatchedProps, IExternalServicesOwnProps } from "./component";
import { IExternalServicesState } from "./reducer";
import { IVkGroupInfoForm } from "./types";

const mapStateToProps = (state: IStore, ownProps: IExternalServicesOwnProps): IExternalServicesState => {
    return state.ExternalServices;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IExternalServicesOwnProps)
    : IExternalServicesDispatchedProps => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        saveVKInfo: (channelID: string, content: IVkGroupInfoForm) => dispatch(actions.save(channelID, content)),
    };
};

const ExternalServices = connect<IExternalServicesState, IExternalServicesDispatchedProps, IExternalServicesOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ExternalServicesComponent);

export default ExternalServices;
