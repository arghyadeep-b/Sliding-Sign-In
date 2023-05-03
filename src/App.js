import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div className="container" id="main">
        <div className="sign-up">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              {/* <!-- Social handles icons --> */}
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p>Or use your email for registration</p>
            <input type="text" name="txt" placeholder="Name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input type="password" name="pswd" placeholder="Password" required="" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="sign-in">
          <form action="#">
            <h1>Sign In</h1>
            <div className="social-container">
              {/* <!-- Social handles icons --> */}
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p>Or use your account</p>
            <input type="email" name="email" placeholder="Email" required="" />
            <input type="password" name="pswd" placeholder="Password" required="" />
            <a href="#">Forgot Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button id="signIn">Sign In</button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start your journey</p>
              <button id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript">
        const signUpButton= document.getElementById('signUp');
        const signInButton= document.getElementById('signIn');
        const main= document.getElementById('main');

        signUpButton.addEventListener('click',()=>{
          main.classNameList.add("right-panel-active");
        });

        signInButton.addEventListener('click',()=>{
          main.classNameList.remove("right-panel-active");
        });
      </script>
    </body>
  );
}

export default App;
