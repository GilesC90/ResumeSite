import React, { useState } from 'react'
import Typical from "react-typical"
import axios from "axios"
import { toast } from "react-toastify"
import backgroundPic from "../../Assets/ContactMe/made_in_detroit.jpeg"
import load1 from "../../Assets/ContactMe/images/load2.gif"
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading"
import ScrollPages from "../../Utilities/ScrollPages"
import Animations from '../../Utilities/Animations'
import "./ContactMe.css"


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscripton = ScrollPages.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            let data = {
            name,
            email,
            message
            };
            setBool(true)
            const res = await axios.post('/contact', data)
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            }
            else if (res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)

                setName("")
                setEmail("")
                setMessage("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className = "main-container fade-in" id = {props.id || ""}>
            <ScreenHeading 
                subHeading = {"Reach Out"}
                title = {"Contact Me"}
            />
            <div className = "form-background">
                <div className = "col">
                <h2 className = "title">
                    <Typical 
                        loop = {Infinity}
                        steps ={[
                            "Reach Out, I Will Reach Back 🤝",
                            1000,
                        ]}
                    />
                </h2>
                <a href = 'https://github.com/GilesC90'>
                    <i className = "fa fa-github-square"></i>
                </a>
                <a href = 'https://www.linkedin.com/in/giles-cardenas'>
                    <i className = "fa fa-linkedin-square"></i>
                </a>
            </div>
            <div className = "form-foreground">
                <div className = "backgroundPic">
                    <h4>
                        Send Your Email Here!
                    </h4>
                    <img src = {backgroundPic} alt = "Network Error" />
                </div>
                <form onSubmit = {submitForm}>
                    <p>{ banner }</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange = { handleName } value = { name } />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange = { handleEmail } value = { email } />
                    
                    <label htmlFor="message">Message</label>
                    <textarea type="text" onChange = { handleMessage } value = { message }/>
                    <div className = "send-btn">
                        <button type = "submit">
                            send<i className = "fa fa-paper-plane" />
                            { bool ? (<b className = "load"><img src = { load1 } alt = "image not found"/></b>) : ("") }
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
