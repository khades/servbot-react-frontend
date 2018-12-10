import APIClient from "../apiclient";
import States from "../utils/states";

export function getChannelName(channelID: string): Promise<string> {
    return APIClient.auth(
        `/api/channel/${channelID}/channelname`,
    )
        .then((result: Response) => {
            if (result.status === 200) {
                return result.json();
            } else {
                throw States.NOTFOUND;
            }
        })
        .then((result) => result.channel);
}
