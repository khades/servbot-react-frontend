import APIClient from "../apiClient/apiClient";
import { IAutoMessage, IAutoMessageCreationResult,  IAutoMessageWithHistory } from "./types";

export function getAutoMessage(channelID: string, id: string): Promise<IAutoMessageWithHistory> {
    return APIClient.auth(`/api/channel/${channelID}/automessages/${id}`).then((res: Response) => res.json());
}

export function saveAutoMessage(channelID: string, id: string, content: IAutoMessage) {
    return APIClient.authPost(`/api/channel/${channelID}/automessages/${id}`, content);
}

export function createAutoMessage(channelID: string, content: IAutoMessage): Promise<string> {
    return APIClient.authPost(`/api/channel/${channelID}/automessages`, content)
        .then((res: Response) => res.json())
        .then((res: IAutoMessageCreationResult) => res.ID);
}
