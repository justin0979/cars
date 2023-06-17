import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar } from "./slices";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export { store, addCar };
