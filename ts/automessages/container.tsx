import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import AutoMessagesComponent from "./component";
import {getVisibleAutoMessages} from "./storeselectors";

const mapStateToProps = (state: IStore) => {
    return getVisibleAutoMessages(state);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        hideEmpty: () => dispatch(actions.hideEmpty),
        reset: () => dispatch(actions.reset),
        showEmpty: () => dispatch(actions.showEmpty),
    };
};

const AutoMessages = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AutoMessagesComponent);

export default AutoMessages;
