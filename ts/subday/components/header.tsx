
import * as React from "react";
import { l10n } from "../../l10n/l10n";
import { concatStrings } from "../../utils/concatStrings";
import { ISubDayFull } from "../types";

const header = React.memo((content?: ISubDayFull) => {
    let subheader = l10n.SUBDAY_IS_ACTIVE;
    if (!content) {
        return null;
    }
    if (content.isActive === false) {
        if (content.closer && content.closer.trim() !== "") {
            subheader = concatStrings(l10n.formatString(l10n.SUBDAY_IS_CLOSED_BY, content.closer));
        } else {
            subheader = l10n.SUBDAY_IS_ACTIVE;
        }
    }
    return (
        <div className="subday__hgroup">
            <div className="subday__header">
                {content.name}
            </div>
            {subheader}
        </div>
    );
});

export default header;
