import { useState } from 'react';
import "../user.css";

const Login = ({ openRegisterModal }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="user" onSubmit={handleSubmit}>
      <h1>Войти</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Войти</button>
      <p>
        Нет аккаунта? <span style={{ cursor: 'pointer', color: 'blue' }}  onClick={openRegisterModal} className="login-link">Регистрация</span>
      </p>
    </form>
  );
};

export default Login;
