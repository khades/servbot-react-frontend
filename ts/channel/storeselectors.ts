import { RouteComponentProps } from "react-router";
import { createSelector } from "reselect";
import { IStore } from "../reducers";
import * as userInfoSelectors from "../userinfo/storeselectors";
import { getIfUserIsModerator } from "./selectors";
import IChannelRoute from "./types";

export const getChannel = (state: IStore, props: RouteComponentProps<IChannelRoute>): string =>
    props.match.params.channelID;

export const isUserMod = createSelector([userInfoSelectors.getUserInfo, getChannel], getIfUserIsModerator);
