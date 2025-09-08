import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { ReactComponent as Logo } from './assests/bushes.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [techText, setTechText] = useState('React Developer');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Toggle tech text
    useEffect(() => {
        const interval = setInterval(() => {
            setTechText(prev => prev === 'React Developer' ? 'Python Expert' : 'React Developer');
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Close menu if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Handle menu navigation
    const goToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    // ✅ Replace the entire return with this updated header
    return (
        <header className="header">
            <div className="header-left">
                <h2 className="name">Amna Saad</h2>
                <Logo className="logo-svg" />
                <div className="tech-text">{techText}</div>
            </div>

            {/* Desktop nav menu */}
            <div className="header-right">
                <button onClick={() => goToSection('About')}>About me</button>
                <button onClick={() => goToSection('Projects')}>Projects</button>
                <button onClick={() => goToSection('Contact')}>Contact me</button>
            </div>

            {/* Hamburger menu for mobile */}
            <button
                className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Small pop-up menu for mobile */}
            {isMenuOpen && (
                <div className="popup-menu" ref={menuRef}>
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => goToSection('About')}>About me</button>
                    <button onClick={() => goToSection('Projects')}>Projects</button>
                    <button onClick={() => goToSection('Contact')}>Contact me</button>
                </div>
            )}
        </header>

    );
};

export default Header;
