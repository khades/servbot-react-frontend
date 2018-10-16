import config from "../../config";
import States from "../utils/states";
import { IBan, ITemplate, IUserLogsInfo } from "./types";

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
    simpleauth: (input: RequestInfo, init?: RequestInit): Promise<Response> => {
        return fetch(input, init).catch((error) => {
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
            if (result.status === 422) {
                throw States.VALIDATIONERROR;
            }
            return result;
        });
    },

    auth: (input: RequestInfo, init?: RequestInit): Promise<Response> => {
        return API.simpleauth(input, init);
    },
    authPost: (input: string, body: any): Promise<Response> => {
        return API.simpleauth(input, {
            body: JSON.stringify(body),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
        });
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

    getTemplates: (channelID: string): Promise<ITemplate[]> => {
        return API.auth(url(`/api/channel/${channelID}/templates`))
            .then((res: Response) => res.json())
            .then((res) => res.templates);
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

    getTemplate: (channelID: string, commandName: string): Promise<ITemplate> => {
        return API.auth(url(`/api/channel/${channelID}/templates/${commandName}`))
            .then((res: Response) => res.json());
    },

    saveTemplate: (channelID: string, commandName: string, template: string) => {
        return API.authPost(url(`/api/channel/${channelID}/templates/${commandName}`), { template });
    },
    setTemplateAliasTo: (channelID: string, commandName: string, aliasTo: string) => {
        return API.authPost(url(`/api/channel/${channelID}/templates/${commandName}/setAliasTo`), { aliasTo });
    },
};

export default API;
