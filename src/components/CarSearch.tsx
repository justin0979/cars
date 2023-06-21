import { useDispatch, useSelector } from "react-redux";
import { CarsState, changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    ({ cars }: { cars: CarsState }) => cars.searchTerm,
  );

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label" htmlFor="">
          Search
        </label>
        <input
          className="input"
          type="string"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
