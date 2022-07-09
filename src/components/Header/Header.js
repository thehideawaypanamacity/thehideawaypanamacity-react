import React from 'react';
import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-title"]}>
        <h2>Your Getaway Panama City, Florida</h2>      
        <p>
          Come stay at our vacation rentals. 
          We have 5 waterfront Hideaway Homes  in Panama City. 
          It is a privilege that you and yours spend your valuable time here with us. We hope that you find pleasure, relaxation and rejuvenation at our retreat(s). 
          Whether you are on vacation or business, we are here to serve you.
        </p>
      </div>
    </header>
  );
}