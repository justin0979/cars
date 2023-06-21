import { useSelector } from "react-redux";
import { CarsState } from "../store";

function CarValue() {
  const totalCost = useSelector(
    ({ cars: { data, searchTerm } }: { cars: CarsState }) => {
      return data
        .filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .reduce((total, { cost }) => total + cost, 0);
    },
  );

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
