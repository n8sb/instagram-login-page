import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import IntroPage from "./components/pages/IntroPage";

function App() {
  const [component, setComponent] = useState(<IntroPage />);

  useEffect(() => {
    const timer = setInterval(() => {
      setComponent(<LoginPage />);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route path='/' element={component} />
    </Routes>
  );
}

export default App;
