import * as React from "react";
import CheckBox from "../../basicComponents/checkbox";
import Input from "../../basicComponents/input";
import { l10n } from "../../l10n/l10n";
import { ISubAlerts } from "../types";

export interface ISubAlertsFormProps {
    channelID: string;
    save: (channelID: string, content: ISubAlerts) => void;
    content: ISubAlerts;
    isExtended: boolean;
}

export default class SubAlertForm extends React.PureComponent<ISubAlertsFormProps, ISubAlerts> {
    constructor(props: ISubAlertsFormProps) {
        super(props);
        this.state = Object.assign({}, this.props.content);
    }
    public render() {
        return (
            <React.Fragment>
                <div className="subalerts__block">
                    <CheckBox
                        value={this.state.enabled}
                        id="enabled"
                        label={l10n.SUBALERTS_ENABLED}
                        setValue={this.setEnabled}
                    />
                </div>
                <div className="subalerts__block">
                    <Input
                        label={l10n.SUBALERTS_FOLLOWER_ALERT}
                        id="followerMessage"
                        className="subalerts__sub-message"
                        value={this.state.followerMessage}
                        setValue={this.setValue}
                    />
                </div>
                {this.renderNotExtendedForm()}
                {this.renderExtendedForm()}
                <div className="subalerts__block">
                    <button type="button" onClick={this.save}>
                        {l10n.SAVE}
                    </button>
                </div>
            </React.Fragment>
        );
    }

    public setEnabled = (value: boolean) => {
        this.setState({ enabled: value });
    }

    public componentDidUpdate(prevProps: ISubAlertsFormProps) {
        if (this.props.channelID !== prevProps.channelID) {
            this.setState(this.props.content);
        }
    }
    public renderInputBlock = (label: string, selector: string) => {
        const subID = `sub${selector}Message`;
        const error = `${selector}Error`;
        const resubID = `resub${selector}Message`;
        const resubEmotesID = `resub${selector}Smile`;
        return (
            <div className="subalerts__block" key={selector}>
                <Input
                    label={l10n.formatString(l10n.SUBALERTS_SUB_ALERT, label)}
                    id={subID}
                    className="subalerts__sub-message"
                    // THIS is fine
                    // @ts-ignore
                    value={this.state[subID]}
                    setValue={this.setValue}
                />
                <Input
                    label={l10n.formatString(l10n.SUBALERTS_RESUB_ALERT, label)}
                    id={resubID}
                    className="subalerts__resub-message"
                    // @ts-ignore
                    value={this.state[resubID]}
                    setValue={this.setValue}
                />
                <Input
                    label={l10n.formatString(l10n.SUBALERTS_RESUB_ALERT_SMILES, label)}
                    id={resubEmotesID}
                    className="subalerts__repeat-body"
                    // @ts-ignore
                    value={this.state[resubEmotesID]}
                    setValue={this.setValue}
                />
            </div>
        );
    }
    private renderNotExtendedForm = () => {
        if (this.props.isExtended === true) {
            return null;
        }
        return this.renderInputBlock("5$", "Five");
    }

    private renderExtendedForm = () => {
        if (this.props.isExtended === false) {
            return null;
        }
        return (
            <React.Fragment>
                {this.renderInputBlock("Prime", "Prime")}
                {this.renderInputBlock("5$", "Five")}
                {this.renderInputBlock("10$", "Ten")}
                {this.renderInputBlock("25$", "TwentyFive")}
            </React.Fragment>
        );
    }

    private setValue = (value: string, inputkey: keyof ISubAlerts) => {
        // @ts-ignore
        this.setState({
            [inputkey]: value,
        });
    }
    private save = () => {
        this.props.save(this.props.channelID, this.state);
    }

}
