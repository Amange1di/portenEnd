import { useState } from 'react';
import "../user.css";
import Login from '../login/Login';

const Register = () => { 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
  };

  const openLoginModal = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
    setShowRegisterModal(false); 
  };

  return (
    <>
      {showRegisterModal && (
        <form className="user" onSubmit={handleSubmit}>
          <h1>Регистрация</h1>
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
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <button type="submit">Зарегистрироваться</button>
          <p>
            У вас есть аккаунт? <span onClick={openLoginModal} style={{ cursor: 'pointer', color: 'blue' }}>Войти</span>
          </p>
        </form>
      )}

      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLoginModal(false)}>X</button>
            <Login openRegisterModal={() => { setShowLoginModal(false); setShowRegisterModal(true); }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
