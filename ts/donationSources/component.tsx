import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import config from "../../config";
import "../../scss/modules/_channel-bans.scss";
import IChannelRoute from "../channel/types";
import ChannelName from "../channelName/container";
import { l10n } from "../l10n/l10n";
import * as Routes from "../routes/routes";
import StatusWrapper from "../statusWrapper/container";
import { IDonationSourcesState } from "./reducer";
interface IDonationSourcesProps extends RouteComponentProps<IChannelRoute>, IDonationSourcesState {
    fetchData: (channelID: string) => void;
}

export default class DonationSourcesComponent extends React.PureComponent<IDonationSourcesProps, {}> {

    public componentDidMount() {
        this.props.fetchData(this.props.match.params.channelID);
    }

    public componentDidUpdate(prevProps: IDonationSourcesProps) {
        if (prevProps.match.params.channelID !== this.props.match.params.channelID) {
            this.props.fetchData(this.props.match.params.channelID);
        }
    }

    public render() {
        return (
            <StatusWrapper state={this.props.state}>
                <form method="POST" action="https://money.yandex.ru/oauth/authorize">
                    <input name="client_id" value={config.yandexClientID} />
                    <input name="response_type" value="code" />
                    <input name="redirect_uri" value="https://servbot.khades.org/yandex/oauth" />
                    <input name="scope" value="operation-history operation-details" />
                    <button>DO IT</button>
                </form>
                {JSON.stringify(this.props.content)}
            </StatusWrapper>
        );
    }

    private renderChannelName = () => {
        return <ChannelName channelID={this.props.match.params.channelID} />;
    }
}
