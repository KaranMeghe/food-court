/* eslint-disable react/jsx-no-duplicate-props */
import food3d from "../../assets/images/Image-login.jpeg";
import SignIn from "../Forms/SignIn";
import SignUp from "../Forms/SignUp";
import { useState, useContext, useEffect } from "react";
import userContext from "../../context/UserContextProvider";
/* eslint-disable react/react-in-jsx-scope */
const Contact = () => {
  const { fetchUsers } = useContext(userContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [loginStatus, setIsLoginStatus] = useState("Login");
  const [loginStatusMessage, setIsLoginStatusMessage] =
    useState("Create an Account");

  const toogleLoginStatus = () => {
    if (loginStatus === "Login" && loginStatusMessage === "Create an Account") {
      return (
        setIsLoginStatus("Sign Up"),
        setIsLoginStatusMessage("Login to your account")
      );
    } else {
      return (
        setIsLoginStatus("Login"), setIsLoginStatusMessage("Create an Account")
      );
    }
  };

  return (
    // <div className="mx-5 w-100 position-relative">
    //   <div
    //     className="d-flex flex-column flex-md-row w-25 align-items-center justify-content-center"
    //     style={{ marginTop: "8%" }}
    //   >
    //     <div className="d-flex flex-column w-50">
    //       <h3 style={{ color: "#212529" }}>{loginStatus}</h3>
    //       <p style={{ fontSize: "12px", cursor: "pointer" }}>
    //         Or{" "}
    //         <span onClick={toogleLoginStatus} style={{ color: "#fc8019" }}>
    //           {loginStatusMessage}
    //         </span>{" "}
    //       </p>
    //       <div className="border border-secondary w-20"></div>
    //     </div>
    //     <div className="w-50">
    //       <img
    //         className="w-50 h-100"
    //         src={food3d}
    //         style={{ borderRadius: "100%", marginLeft: "45%" }}
    //       />
    //     </div>
    //   </div>

    //   {loginStatus === "Login" ? <SignIn /> : <SignUp />}
    // </div>
    <div className="mx-5 position-relative vh-100 ">
      <div className="row mt-5 pt-5">
        <div className="col-lg-3 col-sm-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className=" d-flex flex-column ">
            <h3 style={{ color: "#212529" }}>{loginStatus}</h3>
            <p style={{ fontSize: "12px", cursor: "pointer" }}>
              Or{" "}
              <span onClick={toogleLoginStatus} style={{ color: "#fc8019" }}>
                {loginStatusMessage}
              </span>{" "}
            </p>
            <div className="border border-secondary w-20"></div>
          </div>
          <div className="col-lg-9 col-sm-12 d-flex justify-content-center">
            <img
              className="w-50 h-100"
              src={food3d}
              style={{ borderRadius: "100%" }}
              alt="Food"
            />
          </div>
        </div>
      </div>

      {loginStatus === "Login" ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default Contact;
