import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const links = [
    { url: "https://about.facebook.com/meta", text: "Meta" },
    { url: "https://about.instagram.com/", text: "About" },
    { url: "https://about.instagram.com/blog/", text: "Blog" },
    { url: "https://www.instagram.com/about/jobs/", text: "Jobs" },
    { url: "https://help.instagram.com/", text: "Help" },
    { url: "https://developers.facebook.com/docs/instagram", text: "API" },
    { url: "https://www.instagram.com/legal/privacy/", text: "Privacy" },
    { url: "https://www.instagram.com/legal/terms/", text: "Terms" },
    {
      url: "https://www.instagram.com/directory/profiles/",
      text: "Top Accounts",
    },
    { url: "https://www.instagram.com/directory/hashtags/", text: "Hashtags" },
    { url: "https://www.instagram.com/explore/locations/", text: "Locations" },
    { url: "https://www.instagram.com/web/lite/", text: "Instagram Lite" },
    {
      url: "https://www.facebook.com/help/instagram/261704639352628",
      text: "Contact Uploading & Non-Users",
    },
    {
      url: "https://www.instagram.com/topics/dance-and-performance/",
      text: "Dance",
    },
    {
      url: "https://www.instagram.com/topics/food-and-drink/",
      text: "Food & Drink",
    },
    {
      url: "https://www.instagram.com/topics/home-and-garden/",
      text: "Home & Garden",
    },
    { url: "https://www.instagram.com/topics/music/", text: "Music" },
    {
      url: "https://www.instagram.com/topics/visual-arts/",
      text: "Visual Arts",
    },
  ];

  const footerLinks = links.map((link, ____) => {
    return (
      <div key={link.text}>
        <a href={link.url}>
          <div>{link.text}</div>
        </a>
      </div>
    );
  });

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.linksContainer}>{footerLinks}</div>
      </div>
      <div className={styles.copyright}>© 2022 Instagram from Meta</div>
    </>
  );
};

export default Footer;
