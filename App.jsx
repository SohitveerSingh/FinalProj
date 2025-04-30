import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import { Route,Routes } from "react-router";
import Video from "./pages/Video";
import Profile from "./pages/Profile";

function App() {
  const [aSideNavbar, setSideNavBar] = useState(true);

  const setNavbarDisplay = (value) => {
    setSideNavBar(value);
  };

  return (
    <>
      <Navbar setNavbarDisplay={setNavbarDisplay} aSideNavbar={aSideNavbar} />
      <Routes>
        <Route path="/" element={<Home aSideNavbar={aSideNavbar}  />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/profile/:id" element={<Profile aSideNavbar={aSideNavbar}  />} />
      </Routes>
    </>
  );
}

export default App;
