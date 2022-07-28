import React from "react";
import styles from "./IntroPage.module.css";
const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.instaLogo}>
        <img
          src={require("../../assets/img/instagram-logo.png")}
          alt='instagram logo'
        />
      </div>
      <div className={styles.metaLogo}>
        <span>from</span>
        <img
          src={require("../../assets/img/meta-gradient.png")}
          alt='meta logo'
        />
      </div>
    </div>
  );
};

export default Intro;
