import React from "react";
// import { Routes, Route } from 'react-router-dom'
import Navs from "./nav";
import Title from "./Title";
// import Home from "./pages/Home";
// import Starred from "./pages/Stared";

function MainPageLayout({ children }) {
    return (
        <div>
            <Title title="Box Office" subtitle="Are you looking for a movie or an actor?" />
            <Navs />

            {children}

        </div>
    )
}

export default MainPageLayout;
