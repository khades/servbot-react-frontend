import classnames from "classnames";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import "../../scss/modules/_channel-bans.scss";
import "../../scss/modules/_subday-list.scss";
import Checkbox from "../basicComponents/checkbox";
import Input from "../basicComponents/input";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import { StatusWrapper } from "../statusWrapper";
import { ISubDay } from "../subday/types";
import { ISubDaysState } from "./reducer";

export interface ISubDaysProps extends RouteComponentProps<IChannelRoute>, ISubDaysState {
    createNewSubDay: (channelID: string, name: string, subsOnly: boolean) => void;
    fetchData: (channelID: string) => void;
    setHideCreationPanel: () => void;
    setShowCreationPanel: () => void;
}

interface ISubDaysComponentState {
    allowNonSubs: boolean;
    subdayName: string;
}

export default class SubDaysComponent extends React.PureComponent<ISubDaysProps, ISubDaysComponentState> {
    constructor(props: ISubDaysProps) {
        super(props);
        this.state = {
            allowNonSubs: false,
            subdayName: "",
        };
    }

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: ISubDaysProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.setState({
                allowNonSubs: false,
                subdayName: "",
            });
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="subday-list">
                    <div className="subday-list__hgroup">
                        <div className="subday-list__header">
                            {l10n.formatString(l10n.SUBDAYS_TITLE, this.renderChannelName())}
                        </div>
                        {this.renderButton()}
                    </div>
                    {this.renderSubDays()}
                    {this.renderNewSubDayPanel()}
                </div>
            </StatusWrapper>
        );
    }

    private renderButton = () => {
        if (this.props.showCreationPanel === true) {
            return (
                <button type="button" onClick={this.props.setHideCreationPanel}>
                    {l10n.SUBDAY_LIST}
                </button>
            );
        }
        return (
            <button type="button" onClick={this.props.setShowCreationPanel}>
                {l10n.SUBDAY_CREATE}
            </button>
        );
    }

    private renderSubDays = () => {
        if (!this.props.content || this.props.showCreationPanel === true) {
            return null;
        }
        return (
            <div className="subday-list__items">
                {this.props.content.map(this.renderSubDay)}
            </div>
        );
    }

    private renderSubDay(item: ISubDay) {
        const itemClassNames = classnames({
            "subday-list__name": true,
            "subday-list__name--is-active": item.isActive,
        });
        return (
            <Link key={item.id} className="subday-list__item" to={Routes.ToSubDay(item.channelID, item.id)}>
                <div className={itemClassNames}>
                    {item.name}
                </div>
                <div className="subday-list__date">
                    {new Date(item.date).toLocaleString()}
                </div>
            </Link>
        );
    }
    private renderNewSubDayPanel = () => {
        if (this.props.showCreationPanel === false) {
            return null;
        }
        return (
            <div className="subday-list__create">
                <Input
                    value={this.state.subdayName}
                    id="name"
                    setValue={this.setSubDayName}
                    label={l10n.SUBDAY_NAME}
                />
                <Checkbox
                    value={this.state.allowNonSubs}
                    id="allowNonSubs"
                    setValue={this.setAllowNonSubs}
                    label={l10n.SUBDAY_ALLOW_NON_SUBS}
                />
                <button type="button" onClick={this.createSubday}>
                    {l10n.CREATE}
                </button>
            </div>
        );
    }

    private createSubday = () => {
        this.props.createNewSubDay(this.props.match.params.channelID, this.state.subdayName, !this.state.allowNonSubs);
    }

    private setSubDayName = (value: string) => {
        this.setState({ subdayName: value.trim() });
    }

    private setAllowNonSubs = (value: boolean) => {
        this.setState({ allowNonSubs: value });
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
