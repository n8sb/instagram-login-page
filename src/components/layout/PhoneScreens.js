import styles from "./PhoneScreens.module.css";
import React, { useEffect, useState } from "react";

const PhoneScreens = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "phone-screen-1",
    "phone-screen-2",
    "phone-screen-3",
    "phone-screen-4",
  ];

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => clearInterval(timerId);
  }, []);

  const phoneScreens = images.map((image, imageIndex) => {
    return (
      <img
        key={imageIndex}
        className={`${index !== imageIndex ? styles.hidden : styles.fadeIn}`}
        src={require(`../../assets/img/${image}.png`)}
        alt='screens'
      />
    );
  });

  return (
    <>
      <div className={styles.phoneContainer}>
        <div className={`${styles.phoneScreens} ${styles.fadeIn}`}>
          {phoneScreens}
        </div>
      </div>
    </>
  );
};

export default PhoneScreens;
