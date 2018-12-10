import APIClient from "../apiclient";
import { IAutoMessageWithHistory } from "../automessage/types";

export function getAutoMessages(channelID: string): Promise<IAutoMessageWithHistory[]> {
    return APIClient.auth(`/api/channel/${channelID}/automessages`).then((res: Response) => res.json());
}
