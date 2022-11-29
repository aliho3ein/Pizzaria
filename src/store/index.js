import { configureStore, combineReducers } from "@reduxjs/toolkit";

/* LocalStorage */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/* Slices */
import castReducer from "./slices/cast";

const rootReducer = combineReducers({
  castReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["castReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const persister = persistStore(store);

export default store;
export { persister };
