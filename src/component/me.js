import React from "react";
import { useNavigate } from "react-router-dom";
import "./me.css";
import ProfilePic from "./assests/me.jpg"; // your picture

const Me = () => {
    const navigate = useNavigate();

    return (
        <div className="me-page">
            <div className="me-container">
                {/* Left section */}
                <div className="me-left">
                    <img src={ProfilePic} alt="Amna" />
                    <div className="me-left-text">
                        <h2>Hey!</h2>
                        <p>I am a full-stack React developer with a curious mind,
                            a love for geospatial magic, and a passion for turning ideas into interactive digital experiences.
                        </p>
                    </div>
                </div>

                {/* Right section */}
                <div className="me-right">
                    <h1>A Little bit more!</h1>
                    <p>My journey with code started as a fascination with how data could tell stories and now, I’m on a mission to make maps, apps, and dashboards that don’t just function but also delight.</p>
                    <p>I speak many languages: Python, Java, JavaScript, Rust, and Go and each one brings its own flavor to my toolbox. I get a special thrill from Python processing, turning complex datasets into visual art, maps, or animations that make people stop and go “Wow, how did she do that?” My geospatial skills let me explore the world from above, analyze it from the inside, and bring it all to your screen in ways that are meaningful and beautiful.</p>
                    <p>Recently, I made the leap to Berlin, a city buzzing with creativity, tech, and endless opportunities. Life here is a mix of figuring out the best local coffee spots, navigating the U-Bahn, and hunting for chances to build, learn, and grow. I’m open to projects, collaborations, and opportunities where I can combine my full-stack development skills with my love for spatial data, Python tinkering, and, honestly, a bit of coding mischief.</p>
                    <p>If you’re looking for someone who can code across the stack, make data come alive, and occasionally crack a terrible pun while debugging. Well, congratulations, you found her. Let’s make something amazing together.</p>
                </div>
            </div>

            {/* Button centered below containers */}
            <button className="back-btn-bottom" onClick={() => navigate("/")}>
                ← Return to Main Page
            </button>
        </div>


    );
};

export default Me;
