import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarType {
  name: string;
  id: number;
  cost: number;
}

const carSlice = createSlice({
  name: "car",
  initialState: [] as CarType[],
  reducers: {
    addCar(state, action: PayloadAction<CarType>) {
      state.push(action.payload);
    },
  },
});

export const { addCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
