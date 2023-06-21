import { useDispatch, useSelector } from "react-redux";
import { FormType, changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(({ form }: { form: FormType }) => {
    return form;
  });

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
          </div>
          <input
            type="text"
            className="input is-expanded"
            value={name}
            onChange={handleNameChange}
          />
          <div className="field">
            <label className="label">Cost</label>
          </div>
          <input
            type="number"
            className="input is-expanded"
            value={cost || ""}
            onChange={handleCostChange}
          />
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
