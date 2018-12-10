import APIClient from "../apiclient";
import { ISongRequests, ISongRequestsSettings } from "./types";

export function getSongRequests(channelID: string): Promise<ISongRequests> {
    return APIClient.auth(`api/channel/${channelID}/songrequests`)
        .then((res: Response) => res.json());
}

export function saveSongRequestsSettings(channelID: string, content: ISongRequestsSettings) {
    return APIClient.authPost(`api/channel/${channelID}/songrequests/settings`, content);
}

export function setSongRequestsVolume(channelID: string, volume: number) {
    return APIClient.auth(`/api/channel/${channelID}/songrequests/setvolume/${volume.toString()}`);
}
