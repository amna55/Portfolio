import React from "react";
import "./project.css";

const projectsData = [
    {
        title: "Climate Time Machine",
        description:
            "This is the backend service for the Climate Time Machine / Global Heat Explorer project, written in Rust.It provides APIs and data processing utilities for handling climate and temperature datasets.",
        tech: ["React", "Rust", "Modis", "Python", "REST API"],
        github: "https://github.com/amna55/ClimateTimeMachine_Rust.git",
        bgColor: "#FFD8D8", // pastel red
    },
    {
        title: "Carbon Watch Browser Extension",
        description:
            "Carbon Watch is a lightweight browser extension that estimates the carbon footprint of your web browsing.It tracks the amount of data transferred on each website you visit and converts it into an estimated CO₂ emission, giving users awareness of the environmental impact of digital activity.",
        tech: ["Javascript", "Html", "Chrome", "Extension"],
        github: "https://github.com/amna55/CarbonWatch-BrowserExtension.git",
bgColor: "#b9fbc0", // pastel green
    },
    {
        title: "Statbot",
        description:
            "StatBot is an interactive chatbot powered by Google’s Gemini API, designed to answer questions related to statistics, population, GDP, education, employment, and inflation. The bot combines a React frontend with a Node.js backend, providing a seamless real-time chat experience.",
        tech: ["React", "Node", "GeminiApi", "REST API"],
        github: "https://github.com/amna55/statbot.git",
        bgColor: "#ffcfd2", // pastel coral
    },
    {
        title: "URL Analyzer",
        description:
            "Powerful tool to analyze URLs for SEO, performance, and security issues.",
        tech: ["React", "Golang", "SQL"],
        github: "https://github.com/amna55/URLAnalyzer_FullStack.git",
        bgColor: "#D8FFD8", // pastel green
    },
    {
        title: "Flood Web",
        description:
            "Realtime flood simulation and visualization.",
        tech: ["React", "Python", "FastAPI", "Docker"],
        github: "https://github.com/amna55/React-webapp.git",
        bgColor: "#D8E0FF", // pastel blue
    },
];

const Project = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{ backgroundColor: project.bgColor }}
                    >
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-badges">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="project-btn-container">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                Open Project
                            </a>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    );
};

export default Project;
