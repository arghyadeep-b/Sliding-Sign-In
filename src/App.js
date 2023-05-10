import { useState } from "react";
import "./App.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleFacebook = () => {};
  const handelGoogle = () => {};
  const handleLinkedIn = () => {};
  return (
    <div
      className={`container ${isActive ? "right-panel-active" : ""}`}
      id="main"
    >
      <div className="sign-up">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            {/* <!-- Social handles icons --> */}
            <button onClick={handleFacebook}>
              <BsFacebook />
            </button>
            <button onClick={handelGoogle}>
              <FaGooglePlusG />
            </button>
            <button onClick={handleLinkedIn}>
              <BsLinkedin />
            </button>
            {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>

              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
          </div>
          <p>Or use your email for registration</p>
          <input type="text" name="txt" placeholder="Name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="sign-in">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            {/* <!-- Social handles icons --> */}
            <button onClick={handelGoogle}>
              <BsFacebook />
            </button>
            <button onClick={handelGoogle}>
              <FaGooglePlusG />
            </button>
            <button onClick={handleLinkedIn}>
              <BsLinkedin />
            </button>
            {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
          </div>
          <p>Or use your account</p>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <a href="/">Forgot Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="signIn" onClick={() => setIsActive(!isActive)}>
              Sign In
            </button>
          </div>
          <div className="overlay-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start your journey</p>
            <button id="signUp" onClick={() => setIsActive(!isActive)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    // {/* <script type="text/javascript">
    //   const signUpButton= document.getElementById('signUp');
    //   const signInButton= document.getElementById('signIn');
    //   const main= document.getElementById('main');

    //   signUpButton.addEventListener('click',()=>{
    //     main.classNameList.add("right-panel-active")
    //   });

    //   signInButton.addEventListener('click',()=>{
    //     main.classNameList.remove("right-panel-active")
    //   });
    // </script> */}
  );
}

export default App;
