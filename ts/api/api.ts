import config from "../../config";
import States from "../utils/states";

function url(uri: string): string {
    if (uri.startsWith("/")) {
        return config.appUrl + uri;
    } else {
        return config.appUrl + "/" + uri;
    }
}

export default {
    simpleauth(...params) {
        return fetch(...params).catch((error) => {
            if (error.message === "network error") {
                throw Error(States.OFFLINE);
            }
        }).then((result: Response) => {
            if (result.status === 401) {
                throw Error(States.NOTAUTHORIZED);
            } else {
                return result;
            }
        });
    },
    auth(...params) {
        return this.simpleauth(...params);
    },
    getTime() {
        return fetch(url("api/time"))
            .then((response) => response.json());
    },
    getUserInfo() {
        return this.auth(url("api/user/index")).then((res: Response) => res.json());
    },
    getChannelName(channelID: string): Promise<string> {
        return this.auth(
            url(`/api/channel/${channelID}/channelname`),
        )
            .then((result: Response) => {
                if (result.status === 200) {
                    return result.json();
                } else {
                    throw Error(States.NOTFOUND);
                }
            })
            .then((result) => result.channel);
    },
};
