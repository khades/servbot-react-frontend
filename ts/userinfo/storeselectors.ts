import { IStore } from "../reducers";
import { IUserInfoState } from "./reducer";

export const getUserInfo = (state: IStore): IUserInfoState => state.userInfo;
