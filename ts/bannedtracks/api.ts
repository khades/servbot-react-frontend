import APIClient from "../apiClient/apiClient";
import { IBannedTracks } from "./types";

export function unbanVideo(channelID: string, videoID: string) {
    return APIClient.auth(`/api/channel/${channelID}/songrequests/${videoID}/unban`);
}

export function getBannedTracks(channelID: string, page: number): Promise<IBannedTracks> {
    return APIClient.auth(`/api/channel/${channelID}/songrequests/bannedtracks?page=${page}`)
        .then((res: Response) => res.json());
}
