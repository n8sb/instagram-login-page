import styles from "./App.module.css";
import Page from "./components/layout/Page";
import PhoneScreens from "./components/layout/PhoneScreens";
import LoginBox from "./components/layout/LoginBox";
import Footer from "./components/layout/Footer";

function App() {
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

export default App;
