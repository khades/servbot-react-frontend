import * as React from "react";
import { Link } from "react-router-dom";
import { l10n } from "../../l10n/l10n";
import * as Routes from "../../routes/routes";
import { IBan } from "../types";

function generateBanType(item: IBan) {
    if (item.banLength > 0) {
        return l10n.formatString(l10n.TIME_SECONDS, item.banLength);
    }
    return l10n.BANS_PERMANENT;
}
interface IBanProps extends IBan {
    channelID: string;
}

const BanItem = React.memo((item: IBanProps) => (
    <Link
        to={Routes.ToChannelUserLogs(item.channelID, item.userID)}
        className="channel-bans__item"
        key={item.date.toString()}
    >
        <div className="channel-bans__header">
            <div className="channel-bans__name">
                @{item.user}
            </div>
            <div className="channel-bans__date">
                {new Date(item.date).toLocaleString()}
            </div>
        </div>
        <div className="channel-bans__duration">
            {generateBanType(item)}
        </div>

    </Link>
));

export default BanItem;
