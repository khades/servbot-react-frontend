import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_template-history.scss";
import "../../scss/modules/_template-show.scss";
import Select, { ISelectValue } from "../basicComponents/select";
import TextArea from "../basicComponents/textarea";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import StatusWrapper from "../statusWrapper/container";
import { ITemplateState } from "./reducer";
import { ITemplateHistory } from "./types";

export interface ITemplateRoute {
    channelID: string;
    commandName: string;
}

export interface ITemplateProps extends RouteComponentProps<ITemplateRoute>, ITemplateState {
    fetchData: (channelID: string, commandName: string) => void;
    fetchTemplates: (channelID: string) => void;
    saveTemplate: (channelID: string, commandName: string, template: string) => void;
    setTemplateAliasTo: (channelID: string, commandName: string, aliasTo: string) => void;
    setIsAlias: () => void;
    setIsNotAlias: () => void;
    templates: string[];
}

interface ITemplateComponentState {
    aliasTo: string;
    template: string;
    isAliasTo: boolean;
}

export default class TemplateComponent extends React.PureComponent<ITemplateProps, ITemplateComponentState> {

    constructor(props: ITemplateProps) {
        super(props);
        this.state = {
            aliasTo: "",
            isAliasTo: false,
            template: "",
        };
    }

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID, this.props.match.params.commandName);
        this.props.fetchTemplates(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ITemplateProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID ||
            prevProps.match.params.commandName !== this.props.match.params.commandName
        ) {
            this.props.fetchData(this.props.match.params.channelID, this.props.match.params.commandName);
        }
        if (prevProps.template.aliasTo !== this.props.template.aliasTo
            || prevProps.template.template !== this.props.template.template) {
            this.setState({
                aliasTo: this.props.template.aliasTo,
                isAliasTo: this.props.isAliasTo,
                template: this.props.template.template,
            });
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="template-show">
                    <div className="template-show__block">
                        <hgroup className="template-show__hgroup">
                            <div className="template-show__header-nm">
                                {l10n.formatString(l10n.TEMPLATE_TITLE, this.props.template.commandName)}
                                {this.renderChannelName()}
                            </div>
                            {this.renderToAliasButton()}
                            {this.renderToCommandButton()}
                        </hgroup>
                        {this.renderAliasSubheader()}
                        {this.renderAliasSection()}
                        {this.renderTemplateSection()}
                    </div>
                    {this.renderHistory()}
                </div>
            </StatusWrapper>
        );
    }
    private renderHistory = () => {
        if (!this.props.template || !this.props.template.history) {
            return;
        }
        return (
            <div className="template-show__block">
                <div className="template-show__header">
                    {l10n.TEMPLATE_EDIT_HISTORY}
                </div>
                <div className="template-show__history">
                    {this.props.template.history.map(this.renderHistoryItem)}
                </div>
            </div>
        );

    }
    private renderAliasSubheader = () => (
        <React.Fragment>
            {this.props.isAliasTo === true && l10n.formatString(l10n.ALIAS_TO, this.props.template.aliasTo)}
        </React.Fragment>
    )

    private getSelectOptions = (): ISelectValue[] => {
        return this.props.templates.map((item) => {
            return {
                label: item,
                value: item,
            };
        });
    }

    private renderAliasSection = () => {
        if (this.state.isAliasTo === false) {
            return null;

        }
        return (

            <React.Fragment>
                <Select
                    id="aliasTo"
                    label={l10n.TEMPLATE_ALIAS_TO}
                    value={this.state.aliasTo}
                    values={this.getSelectOptions()}
                    setValue={this.setAliasTo}
                />
                {this.renderGenerateOriginalBody()}
                <div className="template-show__buttons">
                    <button type="button" onClick={this.saveTemplateAliasTo}>
                        {l10n.SAVE}
                    </button>
                    {this.jumpToOriginal()}
                </div>
            </React.Fragment >
        );
    }

    private renderGenerateOriginalBody = () => {
        if (this.props.template.template.trim() === "") {
            return null;
        }
        return (
            <div className="template-show__original-body">
                {l10n.TEMPLATE_COMMAND_BODY}
                :
            {this.props.template.template}
            </div>
        );
    }

    private jumpToOriginal = () => {
        if (this.props.template.aliasTo === ""
            || this.props.template.aliasTo === this.props.template.commandName) {
            return null;
        }
        return (
            <Link to={Routes.ToTemplate(this.props.channelID, this.props.template.aliasTo)}>
                <button type="button">
                    {l10n.TEMPLATE_GO_TO_ORIGINAL}
                </button>
            </Link>
        );
    }

    private renderTemplateSection = () => {
        if (this.state.isAliasTo === true) {
            return null;
        }
        return (
            <React.Fragment>
                <TextArea
                    value={this.state.template}
                    id="templateBody"
                    setValue={this.setTemplate}
                    label={l10n.TEMPLATE_MESSAGE}
                />
                <div className="template-show__buttons">
                    <button type="button" onClick={this.saveTemplate}>
                        {l10n.SAVE}
                    </button>
                    <button type="button" onClick={this.deleteTemplate}>
                        {l10n.TEMPLATE_DELETE}
                    </button>
                </div>
            </React.Fragment>
        );
    }

    private renderToCommandButton = () => {
        if (this.state.isAliasTo === false) {
            return null;
        }
        return (
            <React.Fragment>
                <button type="button" onClick={this.setIsNotAlias}>
                    {l10n.TEMPLATE_TO_NORMAL}
                </button>
            </React.Fragment>
        );
    }

    private renderToAliasButton = () => {
        if (this.state.isAliasTo === true) {
            return null;
        }
        return (
            <React.Fragment>
                <button type="button" onClick={this.setIsAlias}>
                    {l10n.TEMPLATE_TO_ALIAS}
                </button>
            </React.Fragment>
        );
    }

    private renderHistoryItem = (item: ITemplateHistory) => (
        <div className="template-history" key={item.date.toString()}>
            <div className="template-history__row">
                <div className="template-history__user">
                    {item.user}
                    <div className="template-history__user__tooltip">
                        {item.user}
                        #
                        {item.userID}
                    </div>
                </div>
                <div className="template-history__date">
                    {new Date(item.date).toLocaleString()}
                </div>
            </div>
            <div className="template-history__body">{item.template}</div>
        </div>

    )

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }

    private saveTemplate = () => {
        this.props.saveTemplate(this.props.channelID, this.props.commandName, this.state.template);
    }

    private deleteTemplate = () => {
        this.props.saveTemplate(this.props.channelID, this.props.commandName, "");
    }

    private saveTemplateAliasTo = () => {
        this.props.setTemplateAliasTo(this.props.channelID, this.props.commandName, this.state.aliasTo);
    }

    private setIsAlias = () => {
        this.setState({ isAliasTo: true });
    }

    private setIsNotAlias = () => {
        this.setState({ isAliasTo: false });
    }

    private setAliasTo = (aliasTo: string) => {
        this.setState({ aliasTo });
    }

    private setTemplate = (template: string) => {
        this.setState({ template });
    }
}
