import { useState } from 'react';
import "../user.scss";
import Register from '../regis/Register';
import { useTranslation } from "react-i18next";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { t } = useTranslation(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      {showLoginForm ? (
        <Register openRegisterModal={toggleForms} />
      ) : (
        <form className="user" onSubmit={handleSubmit}>
          <h1>{t("Login")}</h1>
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
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{t("Login")}</button>
          <p>
            {t("Don't have an account?")} <span onClick={toggleForms} style={{ cursor: 'pointer', color: 'blue' }}>{t("Register")}</span>
          </p>
        </form>
      )}
    </>
  );
};

export default Login;
