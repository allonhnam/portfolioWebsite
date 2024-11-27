import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        allonhnam@gatech.edu <br />
        1-(718)-662-8789
      </p>
    </section>
  );
}

export default Footer;