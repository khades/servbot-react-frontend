import config from "../../config";
import States from "../utils/states";
import { IBan, IUserLogsInfo } from "./types";

function url(uri: string): string {
    if (uri.startsWith("/")) {
        return config.appUrl + uri;
    } else {
        return config.appUrl + "/" + uri;
    }
}
export type ErrorStates = States.NOTFOUND | States.NOTAUTHORIZED | States.FORBIDDEN | States.OFFLINE;

const API = {
    // input?: Request | string, init?: RequestInit
    simpleauth: (...params): Promise<Response> => {
        return fetch(...params).catch((error) => {
            if (error.message === "network error") {
                throw States.OFFLINE;
            }
        }).then((result: Response) => {
            if (result.status === 404) {
                throw States.NOTFOUND;
            }
            if (result.status === 401) {
                throw States.NOTAUTHORIZED;
            }
            if (result.status === 403) {
                throw States.FORBIDDEN;
            }
            return result;
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
    getChannelUsers: (channelID: string, username?: string): Promise<IUserLogsInfo[]> => {
        if (username) {
            return API.auth(url(`/api/channel/${channelID}/logs/search/${username}`))
                .then((res: Response) => res.json());
        }
        return API.auth(url(`/api/channel/${channelID}/logs`)).then((res: Response) => res.json());
    },
    getUserLogs: (channelID: string, userID: string): Promise<IUserLogsInfo> => {
        return API.auth(url(`/api/channel/${channelID}/logs/userid/${userID}`)).then((res: Response) => res.json());
    },
    getBans: (channelID: string): Promise<IBan[]> => {
        return API.auth(url(`/api/channel/${channelID}/bans`))
            .then((res: Response) => res.json())
            .then((res) => res.bans);
    },
    getChannelName: (channelID: string): Promise<string> => {
        return API.auth(
            url(`/api/channel/${channelID}/channelname`),
        )
            .then((result: Response) => {
                if (result.status === 200) {
                    return result.json();
                } else {
                    throw States.NOTFOUND;
                }
            })
            .then((result) => result.channel);
    },
};

export default API;
