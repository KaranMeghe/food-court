import food3d from "../../assets/images/Image-login.jpeg";
/* eslint-disable react/react-in-jsx-scope */
const Contact = () => {
  return (
    <div className="mx-5">
      <div className="d-flex w-25" style={{ marginTop: "8%" }}>
        <div className="d-flex flex-column w-50">
          <h3>Login</h3>
          <p style={{ fontSize: "12px", cursor: "pointer" }}>
            Or <span style={{ color: "#fc8019" }}>Create an Account</span>{" "}
          </p>
          <div className="border border-secondary w-20"></div>
        </div>
        <div className="w-50">
          <img
            className="w-50 h-100"
            src={food3d}
            style={{ borderRadius: "100%", marginLeft: "45%" }}
          />
        </div>
      </div>

      <form className="w-25 mt-5">
        <input
          type="number"
          className="w-100 p-3 mb-3 border"
          placeholder="Phone Number"
          id="number"
        />
        <button
          className="w-100 p-2 border"
          style={{ backgroundColor: "#fc8019", color: "#fff" }}
        >
          Login
        </button>
      </form>
      <p style={{ fontSize: "12px" }} className="w-25 mt-2">
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
};

export default Contact;
