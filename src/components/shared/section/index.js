import React from "react";
import styles from "./section.module.scss";

function Section({ children, bkgClassName }) {
  return (
    <section className={`${styles.section} ${bkgClassName}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default Section;
