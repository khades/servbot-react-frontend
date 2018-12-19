import APIClient from "../apiClient/apiClient";
import { IUserLogsInfo } from "./types";

export function getUserLogs(channelID: string, userID: string): Promise<IUserLogsInfo> {
    return APIClient.auth(`/api/channel/${channelID}/logs/userid/${userID}`).then((res: Response) => res.json());
}
