import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

function HomePageRedirect() {
    return (
        <iframe 
            src = "/homepage.html"
            title = "Home Page"
            style={{ width: "100%", height: "100vh", border: "none" }}
        />
    ); // The component doesn't need to render anything
  }

const AboutPage = () => {
    return (
        <iframe
            src="/AboutUs.html"
            title="About Us"
            style={{ width: "100%", height: "100vh", border: "none" }}
        />
    );
};

const ContactUs = () => {
    return (
        <iframe
            src="/contactus.html"
            title="Contact Us"
            style={{ width: "100%", height: "100vh", border: "none" }}
        />
    );
};
  

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePageRedirect/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}



export default App;
