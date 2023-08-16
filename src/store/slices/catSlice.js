import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading:false
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCats:(state) => {
      console.log("get cats function called");
        state.isLoading = true;
    },
    setCatsSuccess:(state, action) => {
        state.cats = action.payload;
        state.isLoading= false;
    },
    setCatsFailure:(state) => {
        state.isLoading = false;
    },
    reset:() => {
        return initialState;
    }
  },
});

export const {getCats, setCatsFailure, setCatsSuccess} = catSlice.actions;

export default catSlice.reducer;
