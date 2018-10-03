import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as selectors from "../channel/storeselectors";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import TemplatesComponent, { ITemplatesProps } from "./component";

const mapStateToProps = (state: IStore, props: ITemplatesProps) => {
    return Object.assign(selectors.isUserMod(state, props), state.templates);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        setGoTo: (value: string) => dispatch(actions.setGoTo(value)),
        setShowAll: () => dispatch(actions.showAll()),
        setShowGoTo: () => dispatch(actions.showGoTo()),
        setShowNonEmpty: () => dispatch(actions.showNonEmpty()),
        setShowTemplates: () => dispatch(actions.showTemplates()),
    };
};

const Templates = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TemplatesComponent);

export default Templates;
