import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  changeName,
  changeCost,
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCar };
