import { combineReducers } from "redux";
import user from "./user";
import userData from "./userData";
import livestock from "./livestock";
import blog from "./blog";

export default combineReducers({
  user,
  userData,
  livestock,
  blog,
});
