import React from "react";
import LogInForm from "../components/LoginForm";
import Button from 'react-bootstrap/Button';
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Login({ setUser, user }) {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <main className="main-content">
                <h1 className="login-header">Welcome Back to ServiceSquad</h1>
                <LogInForm setUser={setUser} />
                <br />
                <h4 className="signup-loginpage">
                    Don't have an account? &nbsp;
                    <Button className="signup-button-loginpage" style={{marginTop: "20px"}} variant="success" onClick={() => navigate("/signup")}>
                        Sign Up
                    </Button>
                </h4>
            </main>
        </div>
    );
}

export default Login;
