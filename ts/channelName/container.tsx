import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelNameComponent, {
    IChannelNameDispatchedProps,
    IChannelNameOwnProps,
    IChannelNameStateProps,
} from "./component";
import * as selectors from "./selectors";

const mapStateToProps = (state: IStore, ownProps: IChannelNameOwnProps): IChannelNameStateProps => {
    return {
        value: selectors.getChannelName(state.ChannelName, ownProps.channelID),
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IChannelNameOwnProps): IChannelNameDispatchedProps => {
    return {
        getChannelName: (channelID: string) => dispatch(actions.get(channelID)),
    };
};

const ChannelName = connect<IChannelNameStateProps, IChannelNameDispatchedProps, IChannelNameOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelNameComponent);

export default ChannelName;
