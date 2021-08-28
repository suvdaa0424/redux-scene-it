import { combineReducers, createStore } from "redux";
import favorites from "./reducers/favorites"
import search from "./reducers/search"

const rootReducer = combineReducers({
    movies: favorites,
    search: search
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;