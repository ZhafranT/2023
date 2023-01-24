import React, { useState } from 'react';


const Login = ({ switchPage }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!email && password) {
         alert('email cant be empty ');
      }

      console.log(email);
   };

   return (
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>
         <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
            <label style={{ textAlign: 'center' }}>email</label>
            <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               placeholder="email"
               name="email"
               id="email"
               required
            />
            <label style={{ textAlign: 'center' }}>password</label>
            <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               placeholder="password"
               name="password"
               id="password"
               required
            />
            <br />
            <button type="submit">Login</button>
            <br />
         </form>
         <button onClick={() => switchPage('register')}>Belum punya akun ?</button>
      </div>
   );
};

export default Login;
