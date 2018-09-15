import appUrl from "./utils/appUrl";

export default {
    getChannelName(channelID: string): Promise<string> {
        return fetch(
            appUrl(`/api/channel/${channelID}/channelname`),
        )
            .then((result) => result.json())
            .then((result) => result.channel)
            .catch((error) => "NOT FOUND");
    },
};
