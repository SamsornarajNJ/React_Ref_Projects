import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countValue : 0,
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
      increment: (state) => {
        state.countValue = state.countValue + 1;
      },
      decrement:(state) => {
        if(state.countValue === 0) {
            state.countValue = 0;
        } else {
         state.countValue = state.countValue - 1;
        }
      }
    }
})

export const {increment, decrement} = countSlice.actions;
export default countSlice.reducer;