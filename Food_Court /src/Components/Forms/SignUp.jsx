import { useFormik } from "formik";
import { signInSchema } from "../../Schemas";
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
const SignUp = () => {
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
    <div>
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
        <input
          type="text"
          placeholder="Name"
          style={{
            width: " 100%",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            width: " 100%",
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
        By creating an account, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
};

export default SignUp;
