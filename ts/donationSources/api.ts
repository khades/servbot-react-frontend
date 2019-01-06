import APIClient from "../apiClient/apiClient";
import { IDonationSources } from "./types";

export function get(channelID: string): Promise<IDonationSources> {
    return APIClient.auth(`/api/channel/${channelID}/donationsources`)
        .then((res: Response) => res.json());
}
