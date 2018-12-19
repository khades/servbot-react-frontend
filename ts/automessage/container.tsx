import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import AutoMessageComponent, { IAutoMessageDispatchedProps, IAutoMessageOwnProps } from "./component";
import { IAutoMessageState } from "./reducer";
import { IAutoMessage } from "./types";

const mapStateToProps = (state: IStore, ownProps: IAutoMessageOwnProps): IAutoMessageState => {
    return state.AutoMessage;
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IAutoMessageOwnProps): IAutoMessageDispatchedProps => {
    return {

        createNew: (channelID: string) => dispatch(actions.createNew(channelID)),
        fetchData: (channelID: string, id: string, init: boolean) => dispatch(actions.get(
            channelID,
            id,
            init)),
        reset: () => dispatch(actions.reset),
        saveData: (channelID: string, id: string, content: IAutoMessage) =>
            dispatch(actions.save(channelID, id, content)),
        saveNew: (channelID: string, content: IAutoMessage) =>
            dispatch(actions.saveNew(channelID, content)),
    };
};

const AutoMessage = connect<IAutoMessageState, IAutoMessageDispatchedProps, IAutoMessageOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(AutoMessageComponent);

export default AutoMessage;
