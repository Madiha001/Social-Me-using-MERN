import './login.css';
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import {CircularProgress}  from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";

function Login(props) {

    const email = useRef();
    const password = useRef();
    const {user,isFetching, error, dispatch} = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
          { email: email.current.value, password: password.current.value },
          dispatch
        );
    };
    console.log(user);
    return (
        <div className='login'>
            <div className="lWrap">
                <div className="lLeft">
                    <h3 className="lLogo">Sₒ𝚌ᵢₐᄂMₑ</h3>
                    <span className="lDescription">Facebook Like App let's you connect with your friends and the whole world</span>
                </div>
                <div className="lRight">
                    <form className="lBox" onSubmit={handleClick}>
                        <input placeholder='Email' type="email" required className="lInput" ref={email} />
                        <input placeholder='Password' type="password"  required minLength="8" className="lInput" ref={password} />
                        <button className="lButton">{isFetching ? <CircularProgress color="white" size="20px"/>:"Log In"}</button>
                        <span className="lForgot">Forgot Password?</span>
                        <button className="lRegButton">{isFetching ? <CircularProgress color="white" size="20px"/>:"Create a New Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;