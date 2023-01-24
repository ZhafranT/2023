import { useState, useEffect } from 'react';
import './App.css';

function App() {
   // * value dari form
   const initialValues = { username: '', email: '', password: '' };

   const [formValues, setFormValues] = useState(initialValues);
   const [errorMessage, setErrorMessage] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   // * value dari form
   const handleChange = (e) => {
      // *name itu seperti = id, value : value dari input
      // const { name, value } = e.target;
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
      console.log('value', setFormValues);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrorMessage(validate(formValues));
      setIsSubmit(true);
   };

   useEffect(() => {
      console.log(errorMessage);
      if (Object.keys(errorMessage).length === 0 && isSubmit) {
         console.log(formValues);
      }
   }, [errorMessage]);

   const validate = (values) => {
      const err = {};

      // * untuk validate email
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
      if (!values.username) {
         err.username = 'Username is required!';
      }

      if (!values.email) {
         err.email = 'Email is required!';
      } else if (!regex.test(values.email)) {
         err.email = 'This is not a valid email address';
      }

      if (!values.password) {
         err.password = 'password is required!';
      } else if (values.password.length < 8) {
         err.password = 'Password must be at least 8 characters';
      }

      return err;
   };

   return (
      <div className="App">
         {Object.keys(errorMessage).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
         ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
         )}
         <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="form-ui">
               <div className="field">
                  <label>Username</label>
                  <input
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={formValues.username}
                     onChange={handleChange}
                  />
               </div>
               <p style={{ color: 'red' }}>{errorMessage.username}</p>
               <div className="field">
                  <label>Email</label>
                  <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     value={formValues.email}
                     onChange={handleChange}
                  />
               </div>
               <p style={{ color: 'red' }}>{errorMessage.email}</p>
               <div className="field">
                  <label>password</label>
                  <input
                     type="password"
                     name="password"
                     placeholder="password"
                     value={formValues.password}
                     onChange={handleChange}
                  />
               </div>
               <p style={{ color: 'red' }}>{errorMessage.password}</p>
               <button type="submit">Login</button>
            </div>
         </form>
      </div>
   );
}

export default App;
