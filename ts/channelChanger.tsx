import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { Dispatch } from "redux";
import { IStore } from "./reducers";
import * as actions from "./userinfo/actioncreators";

interface IChannelChangerRoute {
    channelID: string;
}

interface IChannelChanger extends RouteComponentProps<IChannelChangerRoute> {
    setChannel: (channelID: string) => void;
}
class ChannelChangerComponent extends React.Component<IChannelChanger, {}> {
    public componentDidMount() {
        this.props.setChannel(this.props.match.params.channelID);
    }

    public render() {
        return null;
    }

    public componentDidUpdate(prevProps: IChannelChanger) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.setChannel(this.props.match.params.channelID);
        }
    }
}

const mapStateToProps = (state: IStore, props: IChannelChanger) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setChannel: (channelID: string) => dispatch(actions.setChannel(channelID)),
    };
};

const ChannelChanger = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelChangerComponent);

export default ChannelChanger;
