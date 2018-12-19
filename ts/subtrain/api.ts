import APIClient from "../apiClient/apiClient";
import { ISubTrain, ISubTrainForm } from "./types";

export function saveSubTrain(channelID: string, content: ISubTrainForm) {
    return APIClient.authPost(`/api/channel/${channelID}/subtrain`, content);
}

export function getSubTrain(channelID: string): Promise<ISubTrain> {
    return APIClient.auth(`api/channel/${channelID}/subtrain`)
        .then((res: Response) => res.json());
}
