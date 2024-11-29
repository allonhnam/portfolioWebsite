import styles from "./ProjectsStyles.module.css";
import homekeeper from "../../assets/homekeeper.png";
import pathfollow from "../../assets/pathfollow.png";
import expression from "../../assets/expression.png";
import discord from "../../assets/discord.jpg";
import wordle from "../../assets/WordleSuccess.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Academic Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://home-keeper.com/">
          <img className="hover" src={homekeeper} alt="" />
          <h3>HOMEKEEPER (MERN stack)</h3>
          <p>App for HVAC professionals</p>
        </a>
        <a href="https://github.com/allonnam96/namcord">
          <img className="hover" src={discord} alt="" />
          <h3>DISCORD CLONE (Full Stack)</h3>
          <p>Communication App</p>
        </a>
        <a href="https://allonnam96.github.io/wordle/">
          <img className="hover" src={pathfollow} alt="" />
          <h3>WORDLE CLONE (Vanilla JavaScript)</h3>
          <p>Guessing 5-letter word game</p>
        </a>
        <a href="https://allonnam96.github.io/PathFollowSimulation/">
          <img className="hover" src={pathfollow} alt="" />
          <h3>PATH FOLLOWING SIMULATION (Vanilla JavaScript)</h3>
          <p>Aircrafts follows the path avoiding obstacles</p>
        </a>
        <a href="https://github.com/allonnam96/Expression-Decoder">
          <img className="hover" src={expression} alt="" />
          <h3>EXPRESSION DECODER (Machine Learning - Python)</h3>
          <p>Using Scikit-Learn to train AI with facial expressions</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
