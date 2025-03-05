import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [showSignup, setShowSignup] = useState(false);
    const [credentials, setCredentials] = useState({ username:"aditi", password:"@d123"});
    const [loginInfo, setLoginInfo] = useState({username:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const newUsername = e.target.username.value;
        const newPassword = e.target.password.value;
        setCredentials({...credentials, username: newUsername, password: newPassword});
        console.log("Updated Credentials:", { username: newUsername, password: newPassword });
        setShowSignup(false);
        alert("Account Created! Please Sign In.");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginInfo.username === credentials.username && loginInfo.password === credentials.password) {
            localStorage.setItem("username", loginInfo.username);  // Store username in localStorage
            alert("Login Successful!");
            setError("");
            navigate("/");  // Redirect to home page
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4 shadow">
                        <h3 className="text-center">Login Page</h3>
                        {error && <p className="text-danger text-center">{error}</p>}
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                            type="text"
                            className="form-control"
                            value={loginInfo.username}
                            onChange={(e) => setLoginInfo({ ...loginInfo, username : e.target.value})}
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
                                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value})}
                                required
                                />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ borderLeft: "none" }} >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" >Login</button>
                        </form>
                        <button className="btn btn-link mt-3" onClick={() => setShowSignup(true)}>Create Account</button>
                    </div>
                </div>
            </div>

                {showSignup && (
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-4">
                            <div className="card p-4 shadow">
                                <h3 className="card-title">Sign Up</h3>
                                <form onSubmit={handleSignupSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name" pattern="^[A-Za-z ]+$" title="Name should only contain letters." required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control" name="username" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
        </div>

     );

};


export default LoginPage;
