/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import userContext from "../../context/user";
import { Link } from "react-router-dom";

const Greeting = () => {
  const { setDisplayGreetings, userSignUpName } = useContext(userContext);
  return (
    <div className="card w-30 position-absolute top-50 start-50">
      <div className="card-header">Greetings 🎊</div>
      <div className="card-body">
        <p className="card-text">
          Congragulations {userSignUpName}, you have Successfully Signed Up, now
          login and enjoy your meals at your home 🍔
        </p>

        <Link to="login">
          <button
            className="btn"
            style={{ backgroundColor: "#fc8019", color: "#fff" }}
            onClick={() => setDisplayGreetings(false)}
          >
            Go to login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Greeting;
