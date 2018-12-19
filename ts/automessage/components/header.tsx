import * as React from "react";
import { l10n } from "../../l10n/l10n";
import { IAutoMessageState } from "../reducer";

const AutoMessageHeader = React.memo((props: IAutoMessageState) => {
    if (!props.content || props.isNew === true) {
        return null;
    }
    const object = props.content;
    const messageThreshold = object.messageThreshold < 0 ? "0" : object.messageThreshold;
    const durationThreshold = new Date(object.durationThreshold).toLocaleString();
    return (
        <React.Fragment>
            <div className="automessage__header">
                {l10n.AUTOMESSAGES_INFORMATION}
            </div>
            <div className="automessage__stats">
                <div className="automessage__stats__messagethreshold">
                    {l10n.formatString(l10n.AUTOMESSAGES_NEXT_MESSAGETHRESHOLD, messageThreshold)}
                </div>
                <div className="automessage__stats__datethreshold">
                    {l10n.formatString(l10n.AUTOMESSAGES_NEXT_DURATIONTHRESHOLD, durationThreshold)}
                </div>
            </div>
        </React.Fragment>
    );
});
export default AutoMessageHeader;
