import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./rootReducer";

const enhancers = [];
const middleware = [];
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(rootReducer, composedEnhancers);
