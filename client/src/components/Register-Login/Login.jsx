import React from 'react';
import { useNavigate } from 'react-router-dom';
import video3 from '../../assets/RegisterBg.mp4';
import style from './Register.module.css';
import { Navigate } from 'react-router-dom';

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
        <div className={style.loginContainer}>
            <video autoPlay loop muted className={style.backgroundVideo}>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <h2>{t.login}</h2>

                <div className={style.inputField}>
                    <label htmlFor="phone-login">{t.phone}</label>
                    <input type="text" id="phone-login" placeholder={t.phone} required />
                </div>

                <div className={style.inputField}>
                    <label htmlFor="login-password">{t.password}</label>
                    <input type="password" id="login-password" placeholder={t.password} required />
                </div>

                <button type="submit" className={style.btn}>{t.submitLogin}</button>

                {/* Toggle to Sign Up */}
                <p className={style.toggleText}>
                    {t.dontHaveAccount}
                    <button type="button" className={style.toggleBtn} onClick={handleSignUpRedirect}>{t.signUp}</button>
                </p>
            </form>
        </div>
    );
};

export default Login;