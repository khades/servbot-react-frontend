import { connect } from "react-redux";
import { IStore } from "../reducers";
import LoadingSpinnerComponent, { ILoadingSpinnerStateProps } from "./component";

const mapStateToProps = (state: IStore, ownProps: {}): ILoadingSpinnerStateProps => {
    return { state: state.StatusWrapper.state };
};

const LoadingSpinner = connect<ILoadingSpinnerStateProps, {}, {}>(
    mapStateToProps,
)(LoadingSpinnerComponent);

export default LoadingSpinner;
