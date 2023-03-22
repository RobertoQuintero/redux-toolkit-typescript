import {
  type Action,
  configureStore,
  type ThunkAction
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './slices/auth/index';
import { settingsSlice } from './slices/settings/index';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whiteList: ['accessToken']
};

const persistSettingsConfig = {
  key: 'settings',
  storage,
  whiteList: ['themeMode']
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authSlice.reducer>>(
      persistAuthConfig,
      authSlice.reducer
    ),
    settings: persistReducer<ReturnType<typeof settingsSlice.reducer>>(
      persistSettingsConfig,
      settingsSlice.reducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});
// types
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);
