import * as React from "react";
import { RouteComponentProps } from "react-router";
import "../../scss/modules/_channel-bans.scss";
import "../../scss/modules/_subday.scss";
import { l10n } from "../l10n/l10n";
import StatusWrapper from "../statusWrapper/container";
import Header from "./components/header";
import ModeratorPanel from "./components/moderatorPanel";
import Vote from "./components/vote";
import { ISubDayState } from "./reducer";

interface ISubDaysRoute {
    channelID: string;
    id: string;
}
export type ISubDayOwnProps = RouteComponentProps<ISubDaysRoute>;

export interface ISubDayDispatchProps  {
    fetchData: (channelID: string, id: string) => void;
    closeSubDay: (channelID: string, id: string) => void;
    pickSubDayWinner: (channelID: string, id: string) => void;
    pickSubDaySubWinner: (channelID: string, id: string) => void;
    pickSubDayNonSubWinner: (channelID: string, id: string) => void;
    pullSubDayWinner: (channelID: string, id: string, user: string) => void;
    reset: () => void;
}

export type ISubDayProps = ISubDayOwnProps & ISubDayState & ISubDayDispatchProps;

export default class SubDayComponent extends React.PureComponent<ISubDayProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID, this.props.match.params.id);
    }

    public componentDidUpdate(prevProps: ISubDayProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID
            || prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchData(this.props.match.params.channelID, this.props.match.params.id);
        }
    }

    public componentWillUnmount() {
        this.props.reset();
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <div className="subday">
                    <Header {...this.props.content} />
                    <ModeratorPanel {...this.props} />
                    <div className="subday__subheader">
                        {l10n.SUBDAY_VOTES}
                    </div>
                    {this.renderVotes()}
                </div>
            </StatusWrapper>
        );
    }

    private renderVotes = () => {
        const content = this.props.content;
        if (!content) {
            return null;
        }
        return content.votes.map((item) => <Vote key={item.user} {...item} subsOnly={content.subsOnly} />);
    }

}
