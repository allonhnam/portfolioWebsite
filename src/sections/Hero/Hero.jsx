import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/AllonNam_ProfilePicture4.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import cv from "../../assets/AllonNam_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.colorMode}
          src={themeIcon} // Dynamically loads sun or moon
          alt="Color mode icon"
          onClick={toggleTheme}
        />

        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Allon Nam"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Allon (Hyun Jun)
          <br />
          Nam
        </h1>
        <h2>
          Software Engineer
          <br />
          Product Manager
        </h2>
        <span>
          <a
            href="https://www.linkedin.com/in/allonnam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "light" ? linkedinLight : linkedinDark}
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://github.com/allonnam96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "light" ? githubLight : githubDark}
              alt="GitHub icon"
            />
          </a>
        </span>

        <h3>New York, NY</h3>
        <p>
          Transforming data into insights
          <br />
          and insights into innovative products.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
