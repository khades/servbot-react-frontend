import APIClient from "../apiClient/apiClient";
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

export function setVideoAsYoutubeRestrictred(channelID: string, videoID: string) {
    return APIClient.auth(`/api/channel/${channelID}/songrequests/${videoID}/settag/youtuberestricted`);
}

export function setVideoAsTwitchRestrictred(channelID: string, videoID: string) {
    return APIClient.auth(`/api/channel/${channelID}/songrequests/${videoID}/settag/twitchrestricted`);
}

export function setVideoAsChannelRestrictred(channelID: string, videoID: string) {
    return APIClient.auth(`/api/channel/${channelID}/songrequests/${videoID}/settag/${channelID}-restricted`);
}

export function bubbleVideoUp(channelID: string, videoID: string) {
    return APIClient.auth(`api/channel/${channelID}/songrequests/bubbleup/${videoID}`);
}

export function bubbleVideoToSecond(channelID: string, videoID: string) {
    return APIClient.auth(`api/channel/${channelID}/songrequests/bubbleuptosecond/${videoID}`);
}

export function skipVideo(channelID: string, videoID: string) {
    return APIClient.auth(`api/channel/${channelID}/songrequests/skip/${videoID}`);
}
