import APIClient from "../apiClient/apiClient";
import { IUserInfo } from "./types";

export function getUserInfo(): Promise<IUserInfo> {
    return APIClient.auth("api/user").then((res: Response) => res.json());
}
