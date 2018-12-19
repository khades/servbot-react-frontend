import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as selectors from "../channel/storeselectors";
import { IStore } from "../reducers";
import * as actions from "./actioncreators";
import TemplatesComponent, { ITemplatesDispatchProps, ITemplatesOwnProps, ITemplatesStateProps } from "./component";

const mapStateToProps = (state: IStore, props: ITemplatesOwnProps): ITemplatesStateProps => {
    return Object.assign({ isModOnChannel: selectors.isUserMod(state, props) }, state.Templates);
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ITemplatesOwnProps): ITemplatesDispatchProps => {
    return {
        fetchData: (channelID: string) => dispatch(actions.get(channelID)),
        reset: () => dispatch(actions.reset),
        setGoTo: (value: string) => dispatch(actions.setGoTo(value)),
        setShowAll: () => dispatch(actions.showAll()),
        setShowGoTo: () => dispatch(actions.showGoTo()),
        setShowNonEmpty: () => dispatch(actions.showNonEmpty()),
        setShowTemplates: () => dispatch(actions.showTemplates()),
    };
};

const Templates = connect<ITemplatesStateProps, ITemplatesDispatchProps, ITemplatesOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(TemplatesComponent);

export default Templates;
