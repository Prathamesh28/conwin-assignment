// Reducers
import usersReducer from "./reducers/usersReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  users: usersReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
