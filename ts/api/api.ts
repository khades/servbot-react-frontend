import config from "../../config";
function url(uri: string): string {
    if (uri.startsWith("/")) {
        return config.appUrl + uri;
    } else {
        return config.appUrl + "/" + uri;
    }
}
export default {
    getTime() {
        return fetch(url("api/time"))
            .then((response) => response.json());
    },
    getChannelName(channelID: string): Promise<string> {
        return fetch(
            url(`/api/channel/${channelID}/channelname`),
        )
            .then((result) => {
                if (result.status === 200) {
                    return result.json();
                } else {
                    throw Error("NOT FOUND");
                }
            })
            .then((result) => result.channel)
            .catch((error) => { throw Error("NOT FOUND"); });
    },
    // auth(...params) {
    //     return fetch(...params);
    // }
};
