import rootReducer from "./reducers";

import { createStoreHook } from "react-redux";

const Store = createStoreHook(rootReducer);

export default Store;