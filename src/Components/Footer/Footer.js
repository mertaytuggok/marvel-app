import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../Asset/FooterLogo.svg";
export const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerMainText}>
        <div>
          <img className={styles.Logo} src={Logo} />
        </div>
        <div className={styles.centerText}>
          <div className={styles.centerLeft}>
            <span>ABOUT MARVEL</span>
            <span>HELPS/FAQS</span>
            <span>CAREER</span>
            <span>INTERSHIP</span>
          </div>
          <div className={styles.centerLeft}>
            <span>ADVERTISING</span>
            <span>DISNEY+</span>
            <span>MARVELHQ.COM</span>
            <span>REDEEM DIGITAL COMICS</span>
          </div>
          <div className={styles.centerLeft}>
            <span>Github</span>
            <span>Linkedin</span>
          </div>
        </div>{" "}
      </div>
      <div className={styles.bottomText}>
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Your US State Privacy Rights</span>
        <span>Children's Online Privacy Policy</span>
        <span>License Agreement</span>
        <span>Interest-Based Ads</span>
        <span>Marvel Insider Terms</span>
        <span>Terms of Use</span>
        <span>© 2023 MARVEL</span>
      </div>
    </div>
  );
};
