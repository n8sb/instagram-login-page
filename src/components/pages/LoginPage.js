import React from "react";
import styles from "./LoginPage.module.css";
import Page from "../../components/layout/Page";
import PhoneScreens from "../../components/layout/PhoneScreens";
import LoginBox from "../../components/layout/LoginBox";
import Footer from "../../components/layout/Footer";

function LoginPage() {
  return (
    <Page>
      <div className={styles.loginContainer}>
        <PhoneScreens />
        <LoginBox />
      </div>
      <Footer />
    </Page>
  );
}

export default LoginPage;
