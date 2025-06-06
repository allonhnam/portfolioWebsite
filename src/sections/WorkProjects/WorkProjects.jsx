import styles from "./WorkProjectsStyles.module.css";
import ubliss from "../../assets/ubliss.png";
import headstarter from "../../assets/HeadStarterAI.png";
import flexport from "../../assets/flexport.png";
import saleo from "../../assets/Saleo.png"

const WorkProjects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Professional Work</h1>
      <div className={styles.projectsContainer}>
        <a href="https://ublissny.com">
          <img className="hover" src={ubliss} alt="UBLISS Logo" />
          <h3>UBLISS - Founding Software Developer</h3>
          <p>Health Tech</p>
        </a>
        <a href="https://saleo.io/">
          <img className="hover" src={saleo} alt="Saleo Logo" />
          <h3>Saleo - Software Engineer Contract</h3>
          <p>Information Tech</p>
        </a>
        <a href="https://headstarter.co/">
          <img className="hover" src={headstarter} alt="Headstarter Logo" />
          <h3>HEADSTARTER - Software Engineer Internship</h3>
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
