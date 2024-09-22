import React from "react";
import { useState } from "react";
import "./Signup.css";
import formValidation from "./formValidation";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //   formValidation(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = formValidation(formData);
    console.log("Validation error in signup page are ", validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      alert("Submitted successfully!");
      console.log("Form submitted:", formData);
    }
    console.log("Seted Errors are ", errors);
  };

  return (
    <div className="form-center">
      <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            // required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            // required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            // required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            // required
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </fieldset>
        <fieldset>
          <input type="submit" value="Register" />
        </fieldset>
      </form>
      {submitted && <div className="success">Registration successful!</div>}
    </div>
  );
}

export default SignUp;
