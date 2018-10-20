import * as React from "react";
import { IAutoMessage } from "../../api/types";
import Input from "../../basicComponents/input";
import { l10n } from "../../l10n/l10n";

interface IFormProps {
    id: string;
    channelID: string;
    content: IAutoMessage;
    isNew: boolean;
    create: (channelID: string, content: IAutoMessage) => void;
    save: (channelID: string, id: string, content: IAutoMessage) => void;
}

export default class Form extends React.PureComponent<IFormProps, IAutoMessage> {
    constructor(props: IFormProps) {
        super(props);
        const durationLimit = this.props.content.durationLimit / 1000000000;
        this.state = Object.assign({}, this.props.content, { durationLimit });
    }

    public componentDidUpdate(prevProps: IFormProps) {
        if (this.props.channelID !== prevProps.channelID || this.props.id !== prevProps.id) {
            const durationLimit = this.props.content.durationLimit / 1000000000;
            this.setState(Object.assign({}, this.props.content, { durationLimit }));
        }
    }

    public render() {
        return (
            <React.Fragment>
                <Input
                    label={l10n.AUTOMESSAGES_MESSAGE_THRESHOLD}
                    id="message"
                    className="automessage__message"
                    value={this.state.message}
                    setValue={this.setMessage}
                />
                <Input
                    label={l10n.AUTOMESSAGES_MESSAGE_THRESHOLD}
                    id="messageLimit"
                    className="automessage__message-limit"
                    value={this.state.messageLimit}
                    setValue={this.setMessageLimit}
                />
                <Input
                    label={l10n.AUTOMESSAGES_DURATION_THRESHOLD}
                    id="durationLimit"
                    className="automessage__duration-limit"
                    value={this.state.durationLimit}
                    setValue={this.setDurationLimit}
                />
                <Input
                    label={l10n.AUTOMESSAGES_SEND_DURING_GAME}
                    id="game"
                    className="automessage__game"
                    value={this.state.game}
                    setValue={this.setGame}
                />
                <button type="button" onClick={this.save}>
                    {l10n.SAVE}
                </button>
            </React.Fragment>
        );
    }
    private setMessage = (value: string) => {
        this.setState({ message: value.trim() });
    }
    private setMessageLimit = (value: string) => {
        this.setState({ messageLimit: parseInt(value, 10) || 0 });
    }

    private setDurationLimit = (value: string) => {
        this.setState({ durationLimit: parseInt(value, 10) || 0 });
    }

    private setGame = (value: string) => {
        this.setState({ game: value.trim() });
    }

    private save = () => {
        if (this.props.isNew) {
            this.props.create(this.props.channelID, this.state);
        } else {
            this.props.save(this.props.channelID, this.props.id, this.state);
        }
    }
}
