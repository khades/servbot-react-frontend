import { combineReducers } from "redux";
import channelName, { IChannelNameStore } from "./channelName/reducer";
import notifications, { INotification } from "./notifications/reducer";

import routes from "./routes/reducers";

import userInfo, { IUserInfoState } from "./userinfo/reducer";

export default combineReducers({
  channelName,
  notifications,

  // routes,
  userInfo,
});
