import React from 'react';
import { useNavigate } from 'react-router-dom';
import video3 from '/public/RegisterBg.mp4';
import './Register.module.css';

// Mock translations (you might have a different setup)
const translations = {
    en: {
        login: 'Login',
        phone: 'Phone No',
        password: 'Password',
        submitLogin: 'Login',
        dontHaveAccount: "Don't have an account?",
        signUp: 'Sign Up'
    },
    hi: {
        login: 'लॉगिन करें',
        phone: 'फ़ोन नंबर',
        password: 'पासवर्ड',
        submitLogin: 'लॉगिन करें',
        dontHaveAccount: "क्या आपके पास कोई खाता नहीं है?",
        signUp: 'साइन अप करें'
    }
};

const Login = () => {
    const navigate = useNavigate();
    const language = 'en'; // Change this as needed or use context to get the current language
    const t = translations[language];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login form submitted');
    };

    const handleSignUpRedirect = () => {
        navigate('/register');
    };

    return (
        <div style={{width:"100vw", height:"100vh",}}>
            <video autoPlay loop muted id="background-video">
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <form className="form-container-p" onSubmit={handleSubmit}>
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
                <button type="button" className="toggle-btn" onClick={handleSignUpRedirect}>{t.signUp}</button>
            </p>
        </form>
        </div>
    );
};

export default Login;
