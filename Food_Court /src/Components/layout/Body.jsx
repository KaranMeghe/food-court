/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { restarantList } from "../../config";
import RestaruntCard from "../restarunt cards/RestaruntCard";

const Body = () => {
  const [restarants, setRestarants] = useState(restarantList);
  const [searchInput, setSearchInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filterRestarunt = (searchInput, restarants) => {
    const filterRestaruntName = restarants.filter((restarant) => {
      return restarant.data.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    return filterRestaruntName;
  };

  return (
    <main>
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex w-50 m-3" onSubmit={handleForm}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-secondary"
            // onClick={() => {
            //   const data = filterRestarunt(searchInput, restarants);
            //   setRestarants(data);
            // }}
            onClick={() => {
              if (searchInput !== "") {
                const data = filterRestarunt(searchInput, restarantList);
                setRestarants(data);
              } else {
                setRestarants(restarantList);
              }
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="restaruntList d-flex flex-wrap justify-content-around">
        {restarants.map((restarant) => {
          return (
            <RestaruntCard
              {...restarant.data}
              key={restarant.data.id}
              className="d-flex"
            />
          );
        })}
      </div>
    </main>
  );
};
export default Body;
