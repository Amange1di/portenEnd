import  { useState } from 'react';
import "../user.css"
import { NavLink } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form  className='user' onSubmit={handleSubmit}>
      <h1>Войти</h1>
      <div >
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Войти</button>
      <p>
        Нет аккаунта?    <NavLink to="/register" >Регистрация</NavLink>
      </p>
    </form>
  );
};

export default Login;
