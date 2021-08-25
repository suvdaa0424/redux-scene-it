import { createStore } from "redux";
import favorites from "./reducers/favorites"

const store = createStore(favorites)

export default store;