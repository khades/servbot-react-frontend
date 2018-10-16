import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import ChannelNameComponent, { IChannelNameState } from "./component";
import { IChannelName } from "./reducer";
import * as selectors from "./selectors";

export interface IChannelNameContainerProps {
    channelID: string;
}

interface IChannelNameMappedProps {
    value: IChannelName;
}

interface IChannelNameDispatchedprops {
    getChannelName: (id: string) => void;
}

const mapStateToProps = (state: IStore, props: IChannelNameState): IChannelNameMappedProps => {
    return {
        value: selectors.getChannelName(state.channelName, props.channelID),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getChannelName: (id: string) => dispatch(actions.get(id)),
    };
};

const ChannelName = connect<IChannelNameMappedProps, IChannelNameDispatchedprops, IChannelNameContainerProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelNameComponent);

export default ChannelName;
