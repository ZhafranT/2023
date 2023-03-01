import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
   const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
   });

   const [err, setError] = useState(null);
   const [formError, setFormError] = useState({});
   // const [isSubmit, setIsSubmit] = useState(false);

   const navigate = useNavigate(null);

   const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   console.log(inputs);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setFormError(validate(inputs));
      try {
         const res = await axios.post("/auth/register", inputs);
         navigate("/login");
         console.log(res);
      } catch (error) {
         setError(error.response.data);
         console.log(error.response.data);
      }
   };

   const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
         errors.username = "Username is Required";
      }

      if (!values.email) {
         errors.email = "Username is email";
      } else if (!regex.test(values.email)) {
         errors.email = "This is not a valid email format!";
      }

      if (!values.password) {
         errors.password = "Username is password";
      } else if (values.password.length < 4) {
         errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
         errors.password = "Password cannot exceed more than 10 characters";
      }

      return errors;
   };

   return (
      <div className="auth">
         <h1>Register</h1>
         <form action="">
            <input
               required
               type="text"
               placeholder="username"
               name="username"
               onChange={handleChange}
            />
            <p style={{ color: "#FF0000" }}>{formError.username}</p>
            <input
               required
               type="email"
               placeholder="email"
               name="email"
               onChange={handleChange}
            />
            <p style={{ color: "#FF0000" }}>{formError.email}</p>
            <input
               required
               type="password"
               placeholder="password"
               name="password"
               onChange={handleChange}
            />
            <p style={{ color: "#FF0000" }}>{formError.password}</p>
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>
               Do you have an account ? <Link to="/login">Login</Link>
            </span>
         </form>
      </div>
   );
};

export default Register;
