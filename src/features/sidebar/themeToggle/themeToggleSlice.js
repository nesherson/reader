import { createSlice } from '@reduxjs/toolkit';

const themes = createSlice({
  name: 'themes',
  initialState: 'lightTheme',
  reducers: {
    toggleTheme: (state, action) => {
      const tempState = action.payload;
      return tempState;
    },
  },
});

export default themes.reducer;

export const selectTheme = (state) => state.themes;

export const { toggleTheme } = themes.actions;
