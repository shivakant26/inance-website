import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components";
const Homepage = lazy(() => import("../pages/Homepage"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Services"));
const Contactus = lazy(() => import("../pages/Contactus"));
const RootRouter = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RootRouter;
