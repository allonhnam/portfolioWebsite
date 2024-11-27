import styles from "./WorkProjectsStyles.module.css";
import ubliss from "../../assets/ubliss.png";
import headstarter from "../../assets/HeadStarterAI.png";
import flexport from "../../assets/flexport.png";

const WorkProjects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Professional Work</h1>
      <div className={styles.projectsContainer}>
        <a href="https://ublissny.com">
          <img className="hover" src={ubliss} alt="UBLISS Logo" />
          <h3>UBLISS - Software Developer</h3>
          <p>Health Tech</p>
        </a>
        <a href="https://headstarter.co/">
          <img className="hover" src={headstarter} alt="Headstarter Logo" />
          <h3>HEADSTARTER AI - Software Engineer Fellowship</h3>
          <p>Education Tech</p>
        </a>
        <a href="https://www.flexport.com/">
          <img className="hover" src={flexport} alt="Flexport Logo" />
          <h3>FLEXPORT - Financial Data Analyst</h3>
          <p>Supply Chain Tech</p>
        </a>
      </div>
    </section>
  );
};

export default WorkProjects;
