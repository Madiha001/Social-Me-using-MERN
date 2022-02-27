import "./register.css";

function Register() {
  return (
    <div className="register">
      <div className="rWrap">
        <div className="rLeft">
          <h3 className="rLogo">Facebook Like App</h3>
          <span className="rDescription">Facebook Like App let's you connect with your friends and the whole world</span>
        </div>
        <div className="rRight">
          <div className="rBox">
            <input placeholder="Username" className="rInput" />
            <input placeholder="Email" className="rInput" />
            <input placeholder="Password" className="rInput" />
            <input placeholder="Confirm Password" className="rInput" />
            <button className="rButton">Sign Up</button>
            <button className="RegButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;