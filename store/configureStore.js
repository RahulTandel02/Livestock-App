import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

const configureStore = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};
export default configureStore;
