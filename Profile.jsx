import React from "react";
import Typical from "react-typical"
import ScrollPages from "../../../Utilities/ScrollPages";
import "./Profile.css";
import { generate } from "rxjs";

export default function Profile() {

    return(
        <div className = "profile-container">
            <div className = "profile-parent">
                <div className = "profile-details">
                    <div className = "col">
                        <div className = "col-icon">
                            <a href = 'https://github.com/GilesC90'>
                                <i className = "fa fa-github-square"></i>
                            </a>
                            <a href = 'https://www.linkedin.com/in/giles-cardenas'>
                                <i className = "fa fa-linkedin-square"></i>
                            </a>
                        </div>
                        <div className = "profile-details-name">
                            <span className = "primary-text">
                                {" "}
                                Hello, I'm <span className = "highlighted-text">Giles Cardenas</span>
                            </span>
                        </div>
                    </div>
                    <div className = "profile-details-role">
                        <span className = "primary-text">
                            {" "}
                            <h1>
                                {/* typing effect on home page */}
                                <Typical 
                                    loop = {Infinity}
                                    steps ={[
                                        "Full Stack Developer 💻",
                                        1000,
                                        "RSLogix Maintainer ⚙️",
                                        1000,
                                        "MERN Stack Developer 🖥",
                                        1000,
                                        "🐍 Python + React Developer",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className = "profile-role-tagline">
                                Emerging Dev with background in control systems engineering
                            </span>
                        </span>
                    </div>
                    <div className = "profile-options">
                        <button className = "btn primary-btn" onClick = {() => ScrollPages.scrollHandler.scrollToHireMe()}>
                            {" "}
                            Hire Me
                            {" "}
                            </button>
                            <button className = "btn highlighted-btn" onClick = {() => ScrollPages.scrollHandler.scrollToResume()}>View Resume</button>
                    </div>
                </div>
                <div className = "profile-pic">
                    <div className = "profile-pic-background"></div>
                </div>
            </div>
        </div>
    )
}