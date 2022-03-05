import "./register.css";
import {useRef} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value != password.current.value){
      passwordAgain.current.setCustomValidity("Passwords dont match");
    }
    else{
      const user = {
        username : username.current.value ,
        email : email.current.value ,
        password : password.current.value ,
      };
      try{
         await axios.post("/auth/register" , user);
         history("/login");
      }
      catch(err) {
        console.log(err);
      }
    }
  };


  return (
    <div className="register">
      <div className="rWrap">
        <div className="rLeft">
          <h3 className="rLogo">Sₒ𝚌ᵢₐᄂMₑ</h3>
          <span className="rDescription">Facebook Like App let's you connect with your friends and the whole world</span>
        </div>
        <div className="rRight">
          <form className="rBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="rInput" />
            <input placeholder="Email" required ref={email} className="rInput" type="email" />
            <input placeholder="Password" required ref={password} className="rInput" type="password"  minLength="8" />
            <input placeholder="Confirm Password" required ref={passwordAgain} className="rInput" type="password" />
            <button className="rButton" type="submit">Sign Up</button>
            <button className="RegButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;