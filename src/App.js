import React from "react";
import './app.css'
import SideBar from "./Components/SideBar Section/SideBar";
import Body from "./Components/Body Section/Body";

const App = () => {
    return (
        <div className="container">
            <SideBar />
            <Body />
        </div>
    )
}

export default App;