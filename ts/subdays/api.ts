import APIClient from "../apiClient/apiClient";
import { ISubDay } from "../subday/types";
import { ISubDayCreationResult } from "./types";

export function getSubDays(channelID: string): Promise<ISubDay> {
    return APIClient.auth(`/api/channel/${channelID}/subdays`).then((res: Response) => res.json());
}

export function createSubDay(channelID: string, name: string, subsOnly: boolean): Promise<string> {
    return APIClient.authPost(`/api/channel/${channelID}/subdays/new`, { name, subsOnly })
        .then((res: Response) => res.json())
        .then((res: ISubDayCreationResult) => res.ID);
}
