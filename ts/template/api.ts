import APIClient from "../apiClient/apiClient";
import { ITemplateWithHistory } from "./types";

export function getTemplate(channelID: string, commandName: string): Promise<ITemplateWithHistory> {
    return APIClient.auth(`/api/channel/${channelID}/templates/${commandName}`)
        .then((res: Response) => res.json());
}

export function saveTemplate(channelID: string, commandName: string, template: string) {
    return APIClient.authPost(`/api/channel/${channelID}/templates/${commandName}`, { template });
}

export function setTemplateAliasTo(channelID: string, commandName: string, aliasTo: string) {
    return APIClient.authPost(`/api/channel/${channelID}/templates/${commandName}/setAliasTo`, { aliasTo });
}
