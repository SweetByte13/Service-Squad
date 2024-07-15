import React, { useState } from "react";
import LogInForm from "../components/LoginForm";
import Button from 'react-bootstrap/Button';
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Login({ setUser, user }) {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="login-header">Welcome Back to ServiceSquad</h1>
            <NavBar user={user} setUser={setUser} />
            <main>
                <LogInForm setUser={setUser} />
                <br></br>
                <h4 className="signup-loginpage">
                    Don't have an account? &nbsp;
                    <Button className="signup-button-loginpage" onClick={() => navigate("/signup")}>
                        Sign Up
                    </Button>
                </h4>
            </main>
        </div>
    )
}

export default Login;