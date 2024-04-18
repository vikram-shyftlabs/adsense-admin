import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { campaignApi } from "../services/campaign/campaignSlice";
import accountLinkReducer from "../slices/account-link/AccountLinkSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

// Configure Redux store
const persistConfig = {
  key: "root",
  storage,
  // Optionally, you can whitelist specific reducers to be persisted
  // whitelist: ["accountLink"],
};

const persistedReducer = persistReducer(
  persistConfig,
  accountLinkReducer
);

const store = configureStore({
  reducer: {
    [campaignApi.reducerPath]: campaignApi.reducer,
    accountLink: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(campaignApi.middleware),
});

// Setup listeners for Redux Toolkit Query
setupListeners(store.dispatch);

// Create persistor
export const persistor = persistStore(store);

export default store;
