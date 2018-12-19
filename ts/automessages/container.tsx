import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import AutoMessagesComponent, { IAutoMessagesDispatchedProps, IAutoMessagesOwnProps } from "./component";
import { IAutoMessagesState } from "./reducer";
import { getVisibleAutoMessages } from "./storeselectors";

const mapStateToProps = (state: IStore, ownProps: IAutoMessagesOwnProps): IAutoMessagesState => {
    return getVisibleAutoMessages(state);
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IAutoMessagesOwnProps): IAutoMessagesDispatchedProps => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        hideEmpty: () => dispatch(actions.hideEmpty),
        reset: () => dispatch(actions.reset),
        showEmpty: () => dispatch(actions.showEmpty),
    };
};

const AutoMessages = connect<IAutoMessagesState, IAutoMessagesDispatchedProps, IAutoMessagesOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(AutoMessagesComponent);

export default AutoMessages;
