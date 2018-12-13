import { connect } from "react-redux";
import { IStore } from "../reducers";
import LoadingSpinnerComponent from "./component";

const mapStateToProps = (state: IStore) => {
    return { state: state.StatusWrapper.state };
};

const LoadingSpinner = connect(
    mapStateToProps,
)(LoadingSpinnerComponent);

export default LoadingSpinner;
