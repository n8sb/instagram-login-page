import styles from "./LoginBox.module.css";
import React, { useState } from "react";

const LoginBox = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div className={styles.loginContainer}>
      <div className={styles.inputContainer}>
        <img
          className={styles.logo}
          src={require("../../assets/img/instagram-script.png")}
          alt='screens'
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type='text'
          placeholder='Phone number, username, or email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button
          type='submit'
          className={`${styles.loginButton} ${
            userName !== "" && password.length >= 6
              ? styles.darkBlue
              : styles.fadedBlue
          }`}
          onClick={handleLogin}>
          Log In
        </button>

        <div className={styles.divider}>
          <div></div>
          OR
          <div></div>
        </div>

        <div className={styles.facebookLogin}>
          <img
            src={require("../../assets/img/facebook-logo.png")}
            alt='facebook logo'
          />
          &nbsp; Log in with Facebook
        </div>
        <span className={styles.passwordReset}>Forgot password?</span>
      </div>
      <div className={styles.signUpContainer}>
        Don't have an account? <a href='/signup'> Sign up</a>
      </div>

      <div className={styles.downloadButtonsContainer}>
        <div>Get the app.</div>
        <div className={styles.downloadButtons}>
          <a href='https://l.instagram.com/?u=https%3A%2F%2Fitunes.apple.com%2Fapp%2Finstagram%2Fid389801252%3Fpt%3D428156%26ct%3Digweb.loginPage.badge%26mt%3D8%26vt%3Dlo&e=ATPIFBwVFZ1UcrY_G7Jbii7cafd87KwDEnqCs1F6ERR7mRJm11WEjI1MlqD7LeH40ZMfp9SoZMNw4dzJL7N3kniAuM7_-mbB&s=1'>
            <img
              src={require("../../assets/img/app-store.png")}
              alt='screens'
            />
          </a>

          <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D33BFA359-851B-4BDD-9D1A-8AD6196F59CF%26utm_content%3Dlo%26utm_medium%3Dbadge'>
            <img
              src={require("../../assets/img/play-store.png")}
              alt='screens'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
