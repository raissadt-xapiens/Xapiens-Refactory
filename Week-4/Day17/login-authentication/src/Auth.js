import React, { useEffect, useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);

    useEffect(() => {
        const rememberMe = localStorage.getItem("rememberMe") === "true";
        const user = rememberMe ? localStorage.getItem("user") : "";
        setIsRemember(rememberMe);
        setUsername(user);
        setPassword(user);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submiited!");
        localStorage.setItem("username", isRemember ? username : "");
        localStorage.setItem("password", isRemember ? password : "");
        localStorage.setItem("isRemember", isRemember);
    }

    return (
        <div className="login-auth">
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    Username: {' '}
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br/>
                    Password: {' '}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br/>
                    Remember Me: {' '}
                    <input type="checkbox" checked={isRemember} onChange={(e) => setIsRemember(e.target.checked)} />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;