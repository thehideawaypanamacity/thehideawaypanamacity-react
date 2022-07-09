import React from 'react';
import styles from './GalleryItem.module.css';

export default function GalleryItem(props) {

  return (
    <div style={props.style} className={styles["gellery-item"]}>
        {props.children}
    </div>
  );
}