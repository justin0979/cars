import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormType {
  name: string;
  cost: number;
}

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  } as FormType,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;
