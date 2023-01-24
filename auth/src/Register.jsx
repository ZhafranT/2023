import React, { useState } from 'react';

const Register = ({ switchPage }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>
         <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
            <label style={{ textAlign: 'center' }}>Name</label>
            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               type="text"
               placeholder="name"
               name="name"
               id="name"
            />
            <label style={{ textAlign: 'center' }}>email</label>
            <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               placeholder="email"
               name="email"
               id="email"
            />
            <label style={{ textAlign: 'center' }}>password</label>
            <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               placeholder="password"
               name="password"
               id="password"
            />
            <br />
            <button type="submit">Register</button>
            <br />
         </form>
         <button onClick={() => switchPage('login')}>punya akun ?</button>
      </div>
   );
};

export default Register;
