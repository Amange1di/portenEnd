import  { useState } from 'react';
import "../user.css"
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику регистрации
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className='user' onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      <div >
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Зарегистрироваться</button>
      <p>
        У вас есть аккаунт?  <NavLink to="/login" >Войти</NavLink>
      </p>
    </form>
  );
};

export default Register;
