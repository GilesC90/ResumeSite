import React from "react";
import "../Home/Home.css"
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Home () {
    return (
        <div className = "home-container">
            <Header />
            <Profile />
            <Footer />
        </div>
    )
}