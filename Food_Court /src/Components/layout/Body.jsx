/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import RestaruntCard from "../restarunt cards/RestaruntCard";
import ChromeDinoGame from "react-chrome-dino";
import { ShimmerPostList } from "react-shimmer-effects-18";
import { Link } from "react-router-dom";
import { filterRestarunt } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useGetRestarunts } from "../utils/useGetRestarunts";

const Body = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [allRestaurants, filteredRestarants, setFilteredRestarants] =
    useGetRestarunts();

  const isOnline = useOnline();

  const handleForm = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const notValidSearch = (searchInput, allRestaurants) => {
    if (searchInput !== "") {
      const filterName = filterRestarunt(searchInput, allRestaurants);
      setFilteredRestarants(filterName);

      if (filterName.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchInput}"`
        );
      } else {
        setErrorMessage(``);
      }
    } else {
      setFilteredRestarants(allRestaurants);
    }
  };

  // Early Return
  if (!allRestaurants)
    return (
      <>
        <h1 className="pt-5 mt-5">Sorry Nothing for now, Comeback later.</h1>
        <p>
          <small>
            Sometimes swiggy public api get modified behind the scene or get
            some fetching issues in that case please try to refresh 2/3 times.
            thank you.
          </small>
        </p>
      </>
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
            onClick={() => notValidSearch(searchInput, allRestaurants)}
          >
            Search
          </button>
        </form>
      </div>
      <p className="p-2 text-danger text-center">{errorMessage}</p>
      {allRestaurants.length === 0 ? (
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
