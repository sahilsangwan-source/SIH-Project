
import React, { useState } from 'react';
import axios from 'axios';
import './Register.module.css';
import video3 from '/public/RegisterBg.mp4';
import Login from './Login';
import { Navigate } from 'react-router-dom';

const translations = {
    en: {
        signUp: 'Sign Up',
        login: 'Login',
        name: 'Name',
        phone: 'Phone No',
        password: 'Password',
        state: 'State',
        district: 'District',
        village: 'Village',
        alreadyHaveAccount: "Already have an account?",
        dontHaveAccount: "Don't have an account?",
        submitSignUp: 'Sign Up',
        submitLogin: 'Login'
    },
    hi: {
        signUp: 'साइन अप करें',
        login: 'लॉगिन करें',
        name: 'नाम',
        phone: 'फ़ोन नंबर',
        password: 'पासवर्ड',
        state: 'राज्य',
        district: 'जिला',
        village: 'गांव',
        alreadyHaveAccount: "क्या आपके पास पहले से एक खाता है?",
        dontHaveAccount: "क्या आपके पास कोई खाता नहीं है?",
        submitSignUp: 'साइन अप करें',
        submitLogin: 'लॉगिन करें'
    }
};

const Signup = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [language, setLanguage] = useState('en');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        password: '',
        state: '',
        district: '',
        village: ''
    });

    const redirectToLogin = () => {
        window.location.href = '/login';
    }
    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isSignUp ? '/register' : '/login';
            await axios.post(endpoint, formData);
            alert('Request successful');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    const t = translations[language];

    return (
        <div className="signup">
            {/* Video Background */}
            <video autoPlay loop muted id="background-video">
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="content">
                <div className="sign">
                    {/* Language Selector */}
                    <div className="language-selector">
                        <button onClick={() => changeLanguage('en')}>English</button>
                        <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                    </div>

                    {isSignUp ? (
                        // Sign Up Form
                        <form className="form-container" onSubmit={handleSubmit}>
                            <h2>{t.signUp}</h2>
                            <div className="input-field">
                                <label htmlFor="name">{t.name}</label>
                                <input type="text" id="name" placeholder={t.name} onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="phone">{t.phone}</label>
                                <input type="text" id="phone" placeholder={t.phone} onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="password">{t.password}</label>
                                <input type="password" id="password" placeholder={t.password} onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="state">{t.state}</label>
                                <input type="text" id="state" placeholder={t.state} onChange={handleChange} required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="district">{t.district}</label>
                                <input type="text" id="district" placeholder={t.district} onChange={handleChange} required />
                            </div>

                            <button type="submit" className="btn">{t.submitSignUp}</button>

                            {/* Toggle to Login */}
                            <p className="toggle-text">
                                {t.alreadyHaveAccount}
                                <button type="button" className="toggle-btn" onClick={redirectToLogin}>{t.login}</button>
                            </p>
                        </form>
                    ) : (
                        // Use the Login component
                        <Login t={t} toggleForm={toggleForm} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;
