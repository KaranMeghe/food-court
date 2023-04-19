/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { FETCH_RESTARUNTS } from "../../config";
import RestaruntCard from "../restarunt cards/RestaruntCard";
import axios from "axios";

const Body = () => {
  const [restarants, setRestarants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Api Call
    getRestarunts();
  }, []);

  const getRestarunts = async () => {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setRestarants(data?.data?.data?.cards[2]?.data?.data?.cards);
    return restarants;
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
            onClick={() => {
              if (searchInput !== "") {
                const data = filterRestarunt(searchInput, restarants);
                setRestarants(data);
              } else {
                setRestarants(restarants);
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
