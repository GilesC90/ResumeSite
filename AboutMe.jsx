import React from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollPages from "../../Utilities/ScrollPages";
import Animations from "../../Utilities/Animations"
import "./AboutMe.css"


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscripton = ScrollPages.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus. Viverra accumsan in nisl nisi scelerisque eu ultrices.",
        highlights: {
            bullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            ],
            heading: "Here are a few highlights:"
        }
    }

    const renderBulletPoints = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className = "highlight" key = { i }>
                    <div className = "highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    return (
        <div className = "about-me-container screen-container fade-in" id = { props.id || ""}>
            <div className = "about-me-parent">
                <ScreenHeading title ={ "About Me" } subHeading = { "Why Choose Me?" } />
                <div className = "about-me-card">
                    <div className = "about-me-profile"></div>
                    <div className = "about-me-details">
                        <span className = "about-me-description"> { SCREEN_CONSTANTS.description }</span>
                        <div className = "about-me-highlights">
                            <div className = "highlight-heading">
                                <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                            </div>
                            { renderBulletPoints() }
                        </div>
                        <div className = "about-me-options">
                        <button className = "btn primary-btn" onClick={() => ScrollPages.scrollHandler.scrollToHireMe()}>
                            {" "}
                            Hire Me
                            {" "}
                        </button>
                        <a href = "/Users/gilescardenas/Documents/MERN/Project-Week/client/src/Assets/Home/GilesC-R.pdf" download = "GilesCardenas.Resume.pdf">
                            <button className = "btn highlighted-btn">Get Resume</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}