import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface CarType {
  name: string;
  id?: string;
  cost: number;
}

interface CarsState {
  searchTerm: string;
  cars: CarType[];
}

const carsSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    cars: [],
  } as CarsState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<CarType>) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export type { CarType, CarsState };
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
