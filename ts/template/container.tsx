import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as templatesActions from "../templates/actioncreators";
import { getActiveTemplates } from "../templates/storeselectors";
import * as actions from "./actioncreators";
import TemplateComponent, {
    ITemplateDispatchProps,
    ITemplateOwnProps,
    ITemplateProps,
    ITemplateStateProps,
} from "./component";

const mapStateToProps = (state: IStore, ownProps: ITemplateProps): ITemplateStateProps => {
    return Object.assign({}, state.Template, { templates: getActiveTemplates(state) });
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ITemplateProps): ITemplateDispatchProps => {
    return {
        fetchData: (channelID: string, commandName: string) =>
            dispatch(actions.get(channelID, commandName)),
        fetchTemplates: (channelID: string) => dispatch(templatesActions.get(channelID)),
        reset: () => dispatch(actions.reset),
        saveTemplate: (channelID: string, commandName: string, template: string) =>
            dispatch(actions.save(channelID, commandName, template)),
        setTemplateAliasTo: (channelID: string, commandName: string, aliasTo: string) =>
            dispatch(actions.setAliasTo(channelID, commandName, aliasTo)),
    };
};

const Template = connect<ITemplateStateProps, ITemplateDispatchProps, ITemplateOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(TemplateComponent);

export default Template;
