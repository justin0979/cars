import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface CarType {
  name: string;
  id: number;
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
    cars: [] as CarType[],
  } as CarsState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<CarType>) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: parseInt(nanoid()),
      });
    },
    removeCar(state, action: PayloadAction<number>) {
      state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
