import { createSlice } from '@reduxjs/toolkit';
import { awards } from './awardData';

const initialState = {
  awards: awards,
  personDetail: null,
};

const awardSlice = createSlice({
  name: 'award',
  initialState,
  reducers: {
    setAwards (state, action) {
      state.awards = action.payload;
    },
    setPersonDetail (state, action) {
      state.personDetail = action.payload;
    },
  },
});

// Actions
export const {
  setAwards,
  setPersonDetail,
} = awardSlice.actions;

// Reducer
export default awardSlice.reducer;
