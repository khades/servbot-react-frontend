import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelName, { IChannelNameState } from "./component";
import * as selectors from "./selectors";

const mapStateToProps = (state: IStore, props: IChannelNameState) => {
    return {
        value: selectors.getChannelName(state.channelName, props.channelID),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getChannelName: (id: string) => dispatch(actions.get(id)),
    };
};

const ChannelNameContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelName);

export default ChannelNameContainer;
