import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/me.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Ravneek Bhullar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ravneek Kaur
          <br />
          Bhullar
        </h1>
        <h2>Junior Developer</h2>
        <span>
          
          <a href="https://github.com/Ravneek29" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ravneek-kaur-b-399566204/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about coding and problem‑solving to build meaningful digital experiences.
        </p>
        <div className={styles.buttons}>
          <a href="#projects">
            <button>Projects</button>
          </a>
          <a href="#skills">
            <button>Skills</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
