/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
// const SearchBar = () => {
//   return (

//   );
// };

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
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
          <button className="btn btn-outline-secondary">Search</button>
        </form>
      </div>
    </main>
  );
};
export default Body;
