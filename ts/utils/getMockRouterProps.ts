import { Href, UnregisterCallback } from "history";
import { RouteComponentProps } from "react-router";
import { match } from "react-router-dom";

export default function getMockRouterProps<P>(data: P) {

    const location = {
        hash: "",
        key: "",
        pathname: "",
        search: "",
        state: {},
    };

    const props: RouteComponentProps<P> = {
        history: {
            action: "POP",
            length: 2,
            location,

            push: () => { return; },
            replace: () => { return; },

            go: (num) => { return; },

            goBack: () => { return; },
            goForward: () => { return; },

            block: (t) => {
                const temp: UnregisterCallback = null;
                return temp;
            },
            createHref: (t) => {
                const temp: Href = "";
                return temp;
            },
            listen: (t) => {
                const temp: UnregisterCallback = null;
                return temp;
            },
        },
        location,
        match: {
            isExact: true,
            params: data,
            path: "",
            url: "",
        },
        staticContext: {
        },
    };
    return props;
}
