import { createSlice } from '@reduxjs/toolkit';

const newsOptions = createSlice({
  name: 'newsOptions',
  initialState: {
    allOptions: ['Reddit', 'Hacker News'],
    selectedOptions: ['Reddit', 'Hacker News'],
  },
  reducers: {
    toggleOption: (state, action) => {
      if (state.selectedOptions.includes(action.payload)) {
        state.selectedOptions = state.selectedOptions.filter(
          (option) => option !== action.payload
        );
      } else {
        state.selectedOptions.push(action.payload);
      }
    },
  },
});

export const selectAllOptions = (state) => {
  return state.newsOptions.allOptions;
};
export const selectSelectedOptions = (state) =>
  state.newsOptions.selectedOptions;

export const { toggleOption, setOptions } = newsOptions.actions;

export default newsOptions.reducer;
