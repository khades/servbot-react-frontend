import APIClient from "../apiClient/apiClient";
import { ISubAlerts, ISubAlertsWithHistory } from "./types";

export function getSubAlerts(channelID: string): Promise<ISubAlertsWithHistory> {
    return APIClient.auth(`/api/channel/${channelID}/subalert`)
        .then((res: Response) => res.json());
}

export function saveSubAlerts(channelID: string, content: ISubAlerts) {
    return APIClient.authPost(`/api/channel/${channelID}/subalert`, content);
}
