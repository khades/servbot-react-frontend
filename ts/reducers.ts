import { combineReducers } from "redux";
import channelName from "./channelName/reducer";
import notifications from "./notifications/reducer";

import routes from "./routes/reducers";

import userInfo from "./userinfo/reducer";

export default combineReducers({
  channelName,
  notifications,

 // routes,
  userInfo,
});
