import { createSelector } from "reselect";
import { IStore } from "../reducers";
import { IUserInfoState } from "./reducer";
import * as selectors from "./selectors";

export const getUserInfo = (state: IStore): IUserInfoState => state.userInfo;

export const getIfUserIsModerator = createSelector(getUserInfo, selectors.getIfUserIsModerator);
