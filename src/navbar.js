import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username");
        setUsername(null);
        navigate("/");  // Redirect to home after logout
    };

    useEffect(() => {
        setUsername(localStorage.getItem("username"));  // Ensure the navbar updates on login
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/images/signal-light.png" alt="Logo" width="40" height="40" /> TraffiTrack
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>

                        {username ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link text-white fw-bold">Hello, {username}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-light ms-2" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
