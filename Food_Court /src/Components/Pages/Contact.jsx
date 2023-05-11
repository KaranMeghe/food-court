/* eslint-disable react/jsx-no-duplicate-props */
import food3d from "../../assets/images/Image-login.jpeg";
import { useFormik } from "formik";
import { signInSchema } from "../../Schemas";
/* eslint-disable react/react-in-jsx-scope */
const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, handleChange, isSubmitting, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        number: "",
      },
      validationSchema: signInSchema,
      onSubmit,
    });

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

      <form className="w-25 mt-5" onSubmit={handleSubmit}>
        <input
          type="number"
          className={
            errors.number && touched.number ? "border border-danger" : ""
          }
          placeholder="Phone Number"
          id="number"
          value={values.number}
          onChange={handleChange}
          style={{
            width: " 100%",
            marginTop: "5%",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        />
        {errors.number && touched.number && <p>{errors.number}</p>}
        <button
          className="w-100 p-2 border mt-2"
          style={{ backgroundColor: "#fc8019", color: "#fff" }}
          disabled={isSubmitting}
          type="submit"
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
