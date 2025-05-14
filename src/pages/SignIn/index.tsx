import React from "react";
import Header from "../../components/globals/header";

const SignIn: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="login-wrapper">
        <div className="login-box">
          <h2>Login</h2>

          <form>
            <label htmlFor="email">Email/Phone Number</label>
            <input
              type="text"
              id="email"
              placeholder="Ex: 03923434567 or NguyenVanA@gmail.com"
            />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />

            <button type="submit" className="sign-in-btn">
              SIGN IN
            </button>
          </form>

          <div className="divider">OR</div>

          <button className="google-btn">
            <img className="img" src="src/img/ic_google.png" alt="Google" />
            Sign in with Google
          </button>

          <button className="facebook-btn">
            <img className="img" src="src/img/ic_face.png" alt="Facebook" />
            Facebook
          </button>

          <div className="login-footer">
            <p>
              <a href="#">Forgot Password</a>
            </p>
            <p>
              Don't have an account?{" "}
              <a href="/Signup" className="signup-link">
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
