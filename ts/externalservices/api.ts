import APIClient from "../apiClient/apiClient";
import { IChannelExternalServices, IVkGroupInfoForm } from "./types";

export function getChannelExternalServices(channelID: string): Promise<IChannelExternalServices> {
    return APIClient.auth(`/api/channel/${channelID}/info`)
        .then((res: Response) => res.json());
}

export function saveVKGroupInfo(channelID: string, content: IVkGroupInfoForm) {
    return APIClient.authPost(`/api/channel/${channelID}/externalservices/vk`, content);
}
