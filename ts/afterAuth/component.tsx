import * as React from "react";
import { Redirect } from "react-router-dom";
import StatusWrapper from "../statusWrapper/container";
import States from "../utils/states";

export default function AfterAuthComponent() {
    const route = localStorage.getItem("redirect") || "/";
    localStorage.setItem("redirect", "/");
    return (
        <React.Fragment>
            <StatusWrapper state={States.LOADING} />
            <Redirect to={route} />
        </React.Fragment>
    );
}
