import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import AutoMessageComponent from "./component";
import { IAutoMessage } from "./types";

const mapStateToProps = (state: IStore) => {
    return state.AutoMessage;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createNew: (channelID: string) => dispatch(actions.createNew(channelID)),
        fetchData: (channelID: string, id: string, init: boolean) => dispatch(actions.get(channelID, id, init)),
        reset: () => dispatch(actions.reset),
        saveData: (channelID: string, id: string, content: IAutoMessage) =>
            dispatch(actions.save(channelID, id, content)),
        saveNew: (channelID: string, content: IAutoMessage) =>
            dispatch(actions.saveNew(channelID, content)),
    };
};

const AutoMessage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AutoMessageComponent);

export default AutoMessage;
