import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../reducers";
import * as templatesActions from "../templates/actioncreators";
import { getActiveTemplates } from "../templates/storeselectors";
import * as actions from "./actioncreators";
import TemplateComponent, { ITemplateProps } from "./component";

const mapStateToProps = (state: IStore, props: ITemplateProps) => {
    return Object.assign({}, state.template, { templates: getActiveTemplates(state) });
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchData: (channelID: string, commandName: string) =>
            dispatch(actions.get(channelID, commandName)),
        fetchTemplates: (channelID: string) => dispatch(templatesActions.get(channelID)),
        saveTemplate: (channelID: string, commandName: string, template: string) =>
            dispatch(actions.save(channelID, commandName, template)),
        setTemplateAliasTo: (channelID: string, commandName: string, aliasTo: string) =>
            dispatch(actions.setAliasTo(channelID, commandName, aliasTo)),
    };
};

const Template = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TemplateComponent);

export default Template;
