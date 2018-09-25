import * as React from "react";
import * as actions from "./userinfo/actioncreators";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { Dispatch } from "redux";
import { IStore } from "./reducers";

interface IChannelChangerRoute {
    id: string;
}
interface IChannelChanger extends RouteComponentProps<IChannelChangerRoute> {
    setChannel: (channelID: string) => void;
}
class ChannelChanger extends React.Component<IChannelChanger, {}> {
    constructor(props: IChannelChanger) {
        super(props);
        props.setChannel(props.match.params.id);
    }

    public render() {
        return null;
    }

    public componentDidUpdate(prevProps: IChannelChanger) {
        if (prevProps.match.params.id !== this.props.match.params.id) {

            this.props.setChannel(this.props.match.params.id);
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

const ChannelChangerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChannelChanger);

export default ChannelChangerContainer;
