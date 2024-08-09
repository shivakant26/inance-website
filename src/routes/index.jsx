import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Service from "../pages/Services";
import Contactus from "../pages/Contactus";
const RootRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact-us" element={<Contactus />} />
            </Route>
        </Routes>
    )
}

export default RootRouter;