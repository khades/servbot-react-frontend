import { combineReducers } from "redux";
import channelName from "./channelName/reducer";
import routes from "./routes/reducers";
import userInfo from "./userinfo/reducer";

export default combineReducers({
  channelName,
  routes,
  userInfo,
});
