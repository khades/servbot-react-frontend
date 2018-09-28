import config from "../../config";
import States from "../utils/states";
import { IUserLogsInfo } from "./types";

function url(uri: string): string {
    if (uri.startsWith("/")) {
        return config.appUrl + uri;
    } else {
        return config.appUrl + "/" + uri;
    }
}
const API = {
    // input?: Request | string, init?: RequestInit
    simpleauth: (...params) => {
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
    auth: (...params) => {
        return API.simpleauth(...params);
    },
    getTime: () => {
        return fetch(url("api/time"))
            .then((response) => response.json());
    },
    getUserInfo: () => {
        return API.auth(url("api/user/index")).then((res: Response) => res.json());
    },
    getUsersLogs: (channelID: string, username?: string): Promise<IUserLogsInfo[]> => {
        if (username) {
            return API.auth(url(`/api/channel/${channelID}/logs/search/${username}`))
                .then((res: Response) => res.json());
        }
        return API.auth(url(`/api/channel/${channelID}/logs`)).then((res: Response) => res.json());
    },

    getChannelName: (channelID: string): Promise<string> => {
        return API.auth(
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

export default API;
