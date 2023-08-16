import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import rootSaga from "../src/store/sagas/index";
import catSlice from "./store/slices/catSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cats: catSlice,
});

const persistConfig = {
  key: "root",
  storage,
};
let middleware = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware];
} else {
  middleware = [...middleware];
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const resetStore = () => {
  store.dispatch(catSlice.actions.reset());
};
