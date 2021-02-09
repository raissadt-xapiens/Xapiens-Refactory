import React from 'react';
import { AuthContext } from './App';
import Loading from './spinner-of-dots.png';

export const Login = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    };

    const [data, setData] = React.useState(initialState);

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        fetch('http://localhost:8080/login', {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: data.email,
                password: data.password
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
            dispatch({
                type: 'LOGIN',
                payload: resJson
            })
        })
        .catch(error => {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
            });
        });
    };

    return (
        <div className="login-auth">
            <div className="card">
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <h1>Login</h1>
                        <br/>
                        <label htmlFor="email">
                            Email
                            <input type="text" value={data.email} onChange={handleInputChange} name="email" id="email" />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input type="password" value={data.password} onChange={handleInputChange} name="password" id="password" />
                        </label>

                        {data.errorMessage && (
                            <span className="form-error">{data.errorMessage}</span>
                        )}
                        <button disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                <img className="spinner" src={Loading} alt="loading-icon" />
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;