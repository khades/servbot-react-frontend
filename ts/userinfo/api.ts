import APIClient from "../apiclient";
import { IUserInfo } from "./types";

export function getUserInfo(): Promise<IUserInfo> {
    return APIClient.auth("api/user/index").then((res: Response) => res.json());
}
