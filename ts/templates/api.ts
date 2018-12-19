import APIClient from "../apiClient/apiClient";
import { ITemplate } from "../template/types";

export function getTemplates(channelID: string): Promise<ITemplate[]> {
    return APIClient.auth(`/api/channel/${channelID}/templates`)
        .then((res: Response) => res.json())
        .then((res) => res.templates);
}
