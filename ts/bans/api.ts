import APIClient from "../apiclient";
import { IBan } from "./types";

export function getBans(channelID: string): Promise<IBan[]> {
    return APIClient.auth(`/api/channel/${channelID}/bans`)
        .then((res: Response) => res.json())
        .then((res) => res.bans);
}
