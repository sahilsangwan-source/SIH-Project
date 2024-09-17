import React from 'react';
import './Register.component.css';

const Login = ({ t, toggleForm }) => {
    return (
        <form className="form-container-p">
            <h2>{t.login}</h2>

            <div className="input-field">
                <label htmlFor="phone-login">{t.phone}</label>
                <input type="text" id="phone-login" placeholder={t.phone} required />
            </div>

            <div className="input-field">
                <label htmlFor="login-password">{t.password}</label>
                <input type="password" id="login-password" placeholder={t.password} required />
            </div>

            <button type="submit" className="btn">{t.submitLogin}</button>

            {/* Toggle to Sign Up */}
            <p className="toggle-text">
                {t.dontHaveAccount}
                <button type="button" className="toggle-btn" onClick={toggleForm}>{t.signUp}</button>
            </p>
        </form>
    );
};

export default Login;