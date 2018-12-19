import APIClient from "../apiClient/apiClient";
import { ISubscription } from "./types";

export function getSubscriptions(channelID: string, limit?: number): Promise<ISubscription[]> {
    if (!!limit) {
        return APIClient.auth(`api/channel/${channelID}/subs?limit=${limit}`)
            .then((res: Response) => res.json());
    }
    return APIClient.auth(`api/channel/${channelID}/subs`)
        .then((res: Response) => res.json());
}
