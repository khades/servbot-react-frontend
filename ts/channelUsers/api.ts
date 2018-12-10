import APIClient from "../apiclient";
import { IUserLogsInfo } from "../userLogs/types";

export function getChannelUsers(channelID: string, username?: string): Promise<IUserLogsInfo[]> {
    if (username) {
        return APIClient.auth(`/api/channel/${channelID}/logs/search/${username}`)
            .then((res: Response) => res.json());
    }
    return APIClient.auth(`/api/channel/${channelID}/logs`).then((res: Response) => res.json());
}
