import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import "./loginpage.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const [showSignup, setShowSignup] = useState(false);
    const [credentials, setCredentials] = useState({ username: "aditi", password: "@d123" });
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
    const [signupInfo, setSignupInfo] = useState({ name: "", email: "", username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        setCredentials({ username: signupInfo.username, password: signupInfo.password });
        setLoginInfo({ username: signupInfo.username, password: signupInfo.password });
        setShowSignup(false);
        alert("Account Created! Please Sign In.");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginInfo.username === credentials.username && loginInfo.password === credentials.password) {
            localStorage.setItem("username", loginInfo.username);
            alert("Login Successful!");
            setError("");
            navigate("/");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="login-overlay"></div>

                {/* Login Form */}
                {!showSignup && (
                <div className="login-container">
                    <h3 className="text-center">Login Page</h3>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={loginInfo.username}
                                onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    value={loginInfo.password}
                                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                                    required
                                />
                                <span className="input-group-text toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <button className="btn btn-link mt-3" onClick={() => setShowSignup(true)}>Create Account</button>
                </div>
                )}

                {/* Sign-Up Form (Now Appears Below Login Form) */}
                {showSignup && (
                    <div className="signup-container mt-3">
                        <div className="card p-4 shadow">
                            <h3 className="card-title text-center">Sign Up</h3>
                            <form onSubmit={handleSignupSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={signupInfo.name}
                                        onChange={(e) => setSignupInfo({ ...signupInfo, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={signupInfo.email}
                                        onChange={(e) => setSignupInfo({ ...signupInfo, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={signupInfo.username}
                                        onChange={(e) => setSignupInfo({ ...signupInfo, username: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={signupInfo.password}
                                        onChange={(e) => setSignupInfo({ ...signupInfo, password: e.target.value })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default LoginPage;
