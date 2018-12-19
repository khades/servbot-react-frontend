import APIClient from "../apiClient/apiClient";
import { ISubDayFull } from "./types";

export function getSubDay(channelID: string, id: string): Promise<ISubDayFull> {
    return APIClient.auth(`/api/channel/${channelID}/subdays/${id}`).then((res: Response) => res.json());
}

export function closeSubDay(channelID: string, id: string) {
    return APIClient.auth(`api/channel/${channelID}/subdays/${id}/close`);
}

export function pickSubDayWinner(channelID: string, id: string) {
    return APIClient.auth(`api/channel/${channelID}/subdays/${id}/randomize`);
}

export function pickSubDaySubWinner(channelID: string, id: string) {
    return APIClient.auth(`api/channel/${channelID}/subdays/${id}/randomizeSubs`);
}

export function pickSubDayNonSubWinner(channelID: string, id: string) {
    return APIClient.auth(`api/channel/${channelID}/subdays/${id}/randomizeNonSubs`);
}

export function pullSubDayWinner(channelID: string, id: string, user: string) {
    return APIClient.auth(`api/channel/${channelID}/subdays/${id}/pullwinner/${user}`);
}
