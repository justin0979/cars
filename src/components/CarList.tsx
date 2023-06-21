import { useDispatch, useSelector } from "react-redux";
import { CarsState, CarType, removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars }: { cars: CarsState }) => {
    return cars.data;
  });

  const handleCarDelete = (car: CarType) => {
    if (car.id) {
      dispatch(removeCar(car.id));
    }
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
