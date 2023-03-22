import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  themeMode: string;
}

const initialState: SettingsState = {
  themeMode: 'light'
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setThemeMode } = settingsSlice.actions;
