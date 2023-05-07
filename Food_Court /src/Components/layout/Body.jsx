/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { FETCH_RESTARUNTS } from "../../config";
import RestaruntCard from "../restarunt cards/RestaruntCard";
import axios from "axios";
import { ShimmerPostList } from "react-shimmer-effects-18";

const Body = () => {
  const [allRestarants, setAllRestarants] = useState([]);
  const [filteredRestarants, setFilteredRestarants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Api Call
    getRestarunts();
  }, []);

  const getRestarunts = async () => {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setAllRestarants(data?.data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestarants(data?.data?.data?.cards[2]?.data?.data?.cards);
  };

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

  // Early Return
  if (!allRestarants) return <h1>Sorry Nothing for now, Comeback later.</h1>;

  //   function notValidSearch() {
  //     if (searchInput.length && filteredRestarants.length === 0) {
  //       const errorMsg = `Enter valid Search ${searchInput} not found`;
  //       return errorMsg;
  //     }
  //   }

  function notValidSearch() {
    if (filteredRestarants.length === 0) {
      // The function first checks whether the length of the search input is greater than zero (searchInput.length). If it is, it proceeds to the next condition, which checks whether the length of the filtered restaurants array is zero (filteredRestaurants.length === 0). If both of these conditions are true, it creates an error message string that includes the user's search input and returns it.
      let errorMsg = `Oops!! Restaruants or dish not found`;
      return errorMsg;
    }
  }

  return allRestarants.length === 0 ? (
    <div className="mx-auto m-5" style={{ width: "78.125rem" }}>
      <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
    </div>
  ) : (
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
            onClick={() => {
              if (searchInput !== "") {
                const data = filterRestarunt(searchInput, allRestarants);
                setFilteredRestarants(data);
              }
            }}
          >
            Search
          </button>
        </form>
      </div>
      <p className="p-2 text-danger text-center">{notValidSearch()}</p>

      <div className="restaruntList d-flex flex-wrap justify-content-center">
        {filteredRestarants &&
          filteredRestarants.map((restarant) => {
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
