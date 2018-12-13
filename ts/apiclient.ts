import config from "../config";
import States from "./utils/states";

export function url(uri: string): string {
    if (uri.startsWith("http")) {
        return uri;
    }
    if (uri.startsWith("/")) {
        return config.appUrl + uri;
    } else {
        return config.appUrl + "/" + uri;
    }
}

export type ErrorStates = States.NOTFOUND | States.NOTAUTHORIZED | States.FORBIDDEN | States.OFFLINE;

const APIClient = {
    // input?: Request | string, init?: RequestInit
    simpleauth: (input: RequestInfo, init?: RequestInit): Promise<Response> => {
        return fetch(input, init).catch((error) => {
            throw { state: States.OFFLINE };
            // if (error.message === "network error") {
            //     throw { state: States.OFFLINE };
            // }
        }).then((result: Response) => {
            if (result.status === 404) {
                throw { state: States.NOTFOUND };
            }
            if (result.status === 401) {
                throw { state: States.NOTAUTHORIZED };
            }
            if (result.status === 403) {
                throw { state: States.FORBIDDEN };
            }
            if (result.status === 422 || result.status === 406) {
                return result.json().then((value) => {
                    throw {
                        content: value,
                        state: States.VALIDATIONERROR,
                    };
                });
            }
            return result;
        });
    },

    auth: (input: string, init?: RequestInit): Promise<Response> => {
        return APIClient.simpleauth(url(input), init);
    },

    authPost: (input: string, body: any): Promise<Response> => {
        return APIClient.simpleauth(url(input), {
            body: JSON.stringify(body),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
        });
    },
    url,

};

export default APIClient;
