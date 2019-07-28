import React from 'react';
import styles from './section.module.scss';
import { scss } from '../../../utils';

function Section({ children, bkgClassName, ...props }) {
  return (
    <section className={scss(styles.section, bkgClassName)}>
      <div className={styles.container} {...props}>
        {children}
      </div>
    </section>
  );
}

export default Section;
