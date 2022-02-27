import './login.css';

function Login(props) {
    return (
        <div className='login'>
            <div className="lWrap">
                <div className="lLeft">
                    <h3 className="lLogo">Facebook Like App</h3>
                    <span className="lDescription">Facebook Like App let's you connect with your friends and the whole world</span>
                </div>
                <div className="lRight">
                    <div className="lBox">
                        <input placeholder='Email' className="lInput" />
                        <input placeholder='Password' className="lInput" />
                        <button className="lButton">Log In</button>
                        <span className="lForgot">Forgot Password?</span>
                        <button className="lRegButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;