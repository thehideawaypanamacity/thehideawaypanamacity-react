import React from 'react';
import MyGoogleMap from '../MyGoogleMap/MyGoogleMap';
import styles from './Footer.module.css';


export default function Footer() {

  return (
    <footer className={styles.footer}>
      <MyGoogleMap></MyGoogleMap>

      <p>© 2021, created with passion and love by <a href="https://www.linkedin.com/in/andreisurzhan/">Andrei Surzhan</a></p>
    </footer>
  );
}