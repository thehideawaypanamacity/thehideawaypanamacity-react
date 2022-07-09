import React from 'react';
import styles from './Section.module.css';

export default function Section(props) {
  return (
    <div style={props.style ?? {}} className={styles.section}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}