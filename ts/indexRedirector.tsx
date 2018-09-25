import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { IStore } from "./reducers";
import { IUserInfoState } from "./userinfo/reducer";
import * as selectors from "./userinfo/storeselectors";
import States from "./utils/states";

class IndexRedirector extends React.Component<IUserInfoState, {}> {
    public render() {
        if (this.props.state === States.READY) {
            return <Redirect from="/" to={"/channel/" + this.props.userID} />;
        }
        return null;
    }
}

const mapStateToProps = (state: IStore) => {
    return selectors.getUserInfo(state);
};

const IndexRedirectorContainer = connect(
    mapStateToProps,
)(IndexRedirector);

export default IndexRedirectorContainer;
