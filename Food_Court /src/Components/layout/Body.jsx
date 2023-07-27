/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import RestaruntCard from "../restarunt cards/RestaruntCard";
import ChromeDinoGame from "react-chrome-dino";
import { ShimmerPostList } from "react-shimmer-effects-18";
import { Link } from "react-router-dom";
import { filterRestarunt } from "../utils/helper";
// import {
//   useGetFilteredRestarunt,
//   useGetRestarunts,
// } from "../utils/useGetRestarunts";
import useOnline from "../utils/useOnline";
import { useGetRestarunts } from "../utils/useGetRestarunts";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const [restaurants, filteredRestarants, setFilteredRestarants] =
    useGetRestarunts();
  // const [filteredRestarants, setFilteredRestarants] = useGetFilteredRestarunt();

  // const restaurantsList = useGetRestarunts();
  const isOnline = useOnline();

  const handleForm = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  function notValidSearch() {
    if (filteredRestarants.length === 0) {
      // The function first checks whether the length of the search input is greater than zero (searchInput.length). If it is, it proceeds to the next condition, which checks whether the length of the filtered restaurants array is zero (filteredRestaurants.length === 0). If both of these conditions are true, it creates an error message string that includes the user's search input and returns it.
      let errorMsg = `Oops!! Restaruants or dish not found`;
      return errorMsg;
    }
  }

  // Early Return
  if (!restaurants)
    return (
      <h1 className="pt-5 mt-5">Sorry Nothing for now, Comeback later.</h1>
    );

  // If Offline
  if (!isOnline) {
    return (
      <h3 className="text-center my-5 pt-5">
        🔴 You are OffLine, please check your internet Connection
        <ChromeDinoGame />
      </h3>
    );
  }
  return (
    <main>
      <div
        className="container-fluid d-flex justify-content-center pt-5"
        style={{ marginTop: "8%" }}
      >
        <form className="d-flex" onSubmit={handleForm} style={{ width: "65%" }}>
          <input
            className="form-control me-2"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              if (searchInput !== "") {
                const data = filterRestarunt(searchInput, restaurants);
                setFilteredRestarants(data);
              }
            }}
          >
            Search
          </button>
        </form>
      </div>
      <p className="p-2 text-danger text-center">{notValidSearch()}</p>
      {restaurants.length === 0 ? (
        <div className="mx-auto m-5" style={{ width: "78.125rem" }}>
          <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
        </div>
      ) : (
        <div className="restaruntList d-flex flex-wrap justify-content-center">
          {filteredRestarants &&
            filteredRestarants.map((restarant) => {
              return (
                <Link
                  to={"/restarunt/" + restarant.info.id}
                  key={restarant.info.id}
                  className="text-decoration-none text-reset"
                >
                  <RestaruntCard {...restarant.info} className="d-flex" />
                </Link>
              );
            })}
        </div>
      )}
    </main>
  );
};

export default Body;
