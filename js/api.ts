import appUrl from "./utils/appUrl";

export default {
    getChannelName(channelID) {
        fetch(
            appUrl(`/api/channel/${channelID}/channelname`),
        )
        .then((result) => result.json())
        .then((result) => result.channel)
        .catch((error) => "NOT FOUND");
    },
};
