import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
import Illustration from "./assests/coffee.svg";

const About = () => {
    const navigate = useNavigate();

    return (
        <section id="About" className="about-section">
            {/* Left Side: Text */}
            <div className="about-content">
                <span className="status-badge">
                    <span className="status-dot"></span>
                    Available
                </span>

                <h2>Hi, I'm Amna</h2>
                <p>
                    and this is a portfolio of a full-stack developer with a passion for
                    geospatial applications, climate tech, and elegant UI design.
                </p>

                <button className="about-btn" onClick={() => navigate("/me")}>
                    Read more about me
                </button>
            </div>

            {/* Right Side: Illustration */}
            <div className="about-illustration">
                <img src={Illustration} alt="Illustration" />
            </div>

            {/* Floating Shapes */}
            <span className="shape star1">✦</span>
            <span className="shape star2">✦</span>
            <span className="shape star3">✦</span>
            <span className="shape star4">✦</span>

            {/* Centered aesthetic line */}
        </section>
    );
};

export default About;
