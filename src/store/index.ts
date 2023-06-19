import { configureStore } from "@reduxjs/toolkit";
import {
  FormType,
  formReducer,
  changeName,
  changeCost,
  CarType,
  CarsState,
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

export type { FormType, CarType, CarsState };
export {
  store,
  changeName,
  changeCost,
  addCar,
  removeCar,
  changeSearchTerm,
};
