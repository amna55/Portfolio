import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("amna.saad.dev@gmail.com")
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000); // hide after 3 seconds
            })
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <section id="Contact" className="contact-section">
            <p className="thank-you">Thank You!</p>
            <p className="lets-connect">Let's Connect</p>
            <div className="contact-buttons">
                <a
                    href="https://www.linkedin.com/in/amnasaad"
                    className="contact-button linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <button
                    onClick={copyEmail}
                    className="contact-button email"
                >
                    Email
                </button>
            </div>
            {copied && <p className="copy-notification">Email copied to clipboard!</p>}
        </section>
    );
};

export default Contact;
