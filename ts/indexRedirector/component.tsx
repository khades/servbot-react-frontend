import * as React from "react";

import { Redirect } from "react-router-dom";
import { IUserInfoState } from "../userinfo/reducer";
import States from "../utils/states";

const IndexRedirectorComponent = React.memo((props: IUserInfoState) => {
    if (props.state === States.READY) {
        return <Redirect from="/" to={"/channel/" + props.userID} />;
    }
    return null;
});

export default IndexRedirectorComponent;
