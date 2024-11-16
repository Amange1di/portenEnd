import { useState } from 'react';
import "../user.scss";
import Login from '../login/Login';
import { useTranslation } from "react-i18next";

const Register = () => { 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { t } = useTranslation(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
  };

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      {showLoginForm ? (
        <Login openRegisterModal={toggleForms} />
      ) : (
        <form className="user" onSubmit={handleSubmit}>
          <h1>{t("Register")}</h1>
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
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{t("Register")}</button>
          <p>
            {t("Already have an account?")} <span onClick={toggleForms} style={{ cursor: 'pointer', color: 'blue' }}>{t("Login")}</span>
          </p>
        </form>
      )}
    </>
  );
};

export default Register;
