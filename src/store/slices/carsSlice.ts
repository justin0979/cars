import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarType {
  name: string;
  id: number;
  cost: number;
}

const carsSlice = createSlice({
  name: "car",
  initialState: [] as CarType[],
  reducers: {
    addCar(state, action: PayloadAction<CarType>) {
      state.push(action.payload);
    },
  },
});

export const { addCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
