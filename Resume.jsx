import React, { useState } from 'react'
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading"
import ScrollPages from "../../Utilities/ScrollPages"
import Animations from '../../Utilities/Animations'
import "./Resume.css"



export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [offSetStyle, setOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscripton = ScrollPages.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    // Reusable Component For Heading Througout Resume
    const ResumeHeading = (props) => {
        return (
            <div className = "resume-heading">
                <div className = "resume-main-heading">
                    <div className = "heading-bullet"></div>
                        <span>{props.heading ? props.heading : ""}</span>
                        {props.fromDate && props.toDate ? (
                            <div className = "heading-date">
                                {props.fromDate + "-" + props.toDate}
                            </div>
                        ) : (
                            <div className = "heading-date">{ props.toDate }</div>
                        )}
                    </div>
                    <div className = "resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ""}</span>
                    </div>
                    <div className = "resume-heading-description">
                        <span>{props.description ? props.description : ""}</span>
                    </div>
                </div>
        )
    }

    // Static Resume Data for the Labels 
    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Work History Cont.", logoSrc: "work-history.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"}
    ]

    const projectDetails = [
        {
            title: "Personal Portfolio Webste",
            duration: { fromDate: "Nov 12, 2021", toDate: "Nov 19, 2021" },
            description: "Personal Portfolio website to showcase all details of my journey so far.  Knowing that recruiters want something eye-catching when entering a potential employee's site, I wanted to intergrate as much as I could in one week.  The site can be viewed on any computer or mobile device with relative ease.  This is a good place to be 60 days into my development career.",
            subHeading: "Technologies Used: ReactJS, CSS, NodeJs, NodeMailer, Express, CORS"
        },
        {
            title: "Right Route",
            duration: { fromDate: "Oct 14, 2021", toDate: "Oct 21, 2021" },
            description: "My first ever project. Utilizing Python, MySQL, and the Google Maps API.  Given my love of running outdoors, I wanted to create an app where a person could pick a location on a map and get an idea of how long it would take to jog there.",
            subHeading: "Technologies Used: Python, HTML, CSS, MySQL, Bootstrap, Google Maps API"
        }
    ]

    const resumeDetails = [
        // EDUCATION
        <div className = "resume-screen-container" key = "education">
        <br />
        <br />
            <ResumeHeading
                heading = {"Coding Dojo of Bellevue"}
                subHeading = {"Immersive Full-Stack Developer Certificate"}
                fromDate = {""}
                toDate = {"2021"}
            />
            <span className = "resume-description-text">
                Trained in a fully-immersive, 14-week 3-stack coding bootcamp where I was given everything needed to be an entry level developer.  Worked individually and in collaboration teams to meet deadlines.  Practiced AGILE methodology and Scrum project management.
            </span>
            <br />
            <br />
            <br />
            <ResumeHeading
                heading = {"Henry Ford College"}
                subHeading = {"Associate's of Applied Science in Electrical Technology"}
                fromDate = {"2015"}
                toDate = {"2019"}
            />
            <span className = "resume-description-text">
                Learned the theoretical foundation of electrical, pneumatic, and hydraulic power.  Created several PLC and FANUC projects, along with learing other aspects of applied physics. Graduated Magna Cum Laude 
            </span>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>,
        // WORK HISTORY
        <div className = "resume-screen-container" key = "work-history">
            <div className = "experience-container">
                <ResumeHeading
                    heading = {"Jones Lang LaSalle"}
                    subHeading = {"Control Systems Specialist"}
                    fromDate = {"2018"}
                    toDate = {"2021"}
                />
                <div className = "experience-descripton">
                    <span className = "resume-description-text">
                        Worked as second in command under site engineer.
                    </span>
                </div>
                <div className = "experience-description">
                    <span className = "resume-description-text">
                        Involved in the preventative and reactive maintenance of the control system components of a Vanderlande conveyance system in an Amazon sortation center with a 400K+ parcel volume
                    </span>
                    <br />
                    <span className = "resume-description-text">
                    Maintained and troubleshot the software of elements necessary to uphold Amazon’s production criterion
                    </span>
                    <br />
                    <span className = "resume-description-text">
                    Point of contact of JLL for Amazon Operations Management in High Severity Events
                    </span>
                    <br />
                    <br />
                </div>
            </div>
            <div className = "experience-container">
            <br />
                <ResumeHeading
                    heading = {"CBRE"}
                    subHeading = {"Material Handling Engineer II"}
                    fromDate = {"2018"}
                    toDate = {"2018"}
                />
                <div className = "experience-descripton">
                    <span className = "resume-description-text">Played an integral part of the team that launched Michigan's biggest Amazon facility</span>
                </div>
                <div className = "experience-description">
                    <span className = "resume-description-text">
                    Involved in the preventative and reactive maintenance of Dematic conveyance systems in an Amazon robotics facility with a 750K+ parcel volume
                    </span>
                    <br />
                    <span className = "resume-description-text">
                    Maintained the hardware of the system’s three package handling sorters
                    </span>
                    <br />
                    <span className = "resume-description-text">
                    Repaired equipment integral to sustain Amazon’s production standards
                    </span>
                    <br />
                    <br />
                </div>
            </div>
        </div>,
        // WORK HISTORY CONTINUED
        <div className = "resume-screen-container " key = "work-history-cont">
            <div className = "experience-container">
                <ResumeHeading
                    heading = {"Beaumont Heathcare"}
                    subHeading = {"Environmental Specialist"}
                    fromDate = {"2012"}
                    toDate = {"2018"}
                />
                <div className = "experience-descripton">
                    <span className = "resume-description-text">Learned what compassion and empathy really meant</span>
                </div>
                <div className = "experience-description">
                    <span className = "resume-description-text">
                    Responsible for the sanitizing and disinfecting of high priority areas within Dearborn’s largest hospital.
                    </span>
                    <br />
                    <span className = "resume-description-text">
                    Cleaning and preparation of various operating and trauma rooms
                    </span>
                    <br />
                </div>
                <br />
                <br />
            </div>
        </div>,
        // PROJECTS
        <div className = "resume-screen-container" key = "projects">
            <br />
            <ResumeHeading 
                heading = {"Personal Portfolio Webste"}
                subHeading = {"Technologies Used: ReactJS, CSS, NodeJs, RxJS, NodeMailer, Express, CORS"}
                description = {"Personal Portfolio website to showcase all details of my journey so far.  Knowing that recruiters want something eye-catching when entering a potential employee's site, I wanted to intergrate as much as I could in one week.  The site can be viewed on any computer or mobile device with relative ease.  This is a good place to be 60 days into my development career."}
                fromDate = {"Nov 12, 2021"}
                toDate = {"Nov 19, 2021"}
            />
            <br />
            <br />
            <ResumeHeading 
                heading = {"Right Route"}
                subHeading = {"Technologies Used: Python, HTML, CSS, MySQL, Bootstrap, Google Maps API"}
                description = {"My first ever project. Utilizing Python, MySQL, and the Google Maps API.  Given my love of running outdoors, I wanted to create an app where a person could pick a location on a map and get an idea of how long it would take to jog there."}
                fromDate = {"Oct 14, 2021"}
                toDate = {"Oct 21, 2021"}
            />
            <br />
            <br />
            <br />
        </div>,
        // INTERESTS 
        <div className = "resume-screen-container" key = "interests">
        <br />
            <ResumeHeading
                heading = "Reading and Researching"
                description = "I have always had a love for knowledge and I try to feed my brain in many ways.  Whether it be hard-cover, paperback, or a Youtube wormhole, spend at least an hour a day attempting to sharpen my mind."
            />
        <br />
        <br />
        <br />
            <ResumeHeading
                heading = "Running"
                description = "After years of being physically active in other ways, I picked up running as a hobby in 2019.  Last year made my first 1000 mile year and I am on pace to continue that trend"
            />
        </div>
    ]

    const handleCarousel = (index) => {
        let offsetHeight = 360;
        let newCaroselOffset = {
            style : { transform: "translateY(" + index * offsetHeight * -1 + "px" },
        }
        setOffSetStyle(newCaroselOffset);
        setSelectedBulletIndex(index)
    };

    const bullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick = {() => handleCarousel(index)}
            className = {index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key = {index}>
                <img src = {require (`../../Assets/Resume/${bullet.logoSrc}`).default}
                alt = "No internet connection" />
                <span className = "bullet-label">{ bullet.label }</span>
            </div>
        ))
    };

    const getResumeScreen = () => {
        return (
            <div
            style = {offSetStyle.style}
            className = "resume-details-carosel">
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    };

    return (
        <div className = "resume-container screen-container fade-in" id = {props.id || ""}>
            <div className = "resume-content">
                <ScreenHeading title = {"Resume"} subHeading = {"Meet Giles"} />
                <div className = "resume-card">
                    <div className = "resume-bullets">
                        <div className = "bullet-container">
                            <div className = "bullet-icons"></div>
                            <div className = "bullets">{bullets()}</div>
                        </div>
                    </div>
                    <div className = "resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
};
