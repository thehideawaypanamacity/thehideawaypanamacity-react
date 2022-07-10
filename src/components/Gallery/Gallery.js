import React from 'react';
import styles from './Gallery.module.css';


export default function Gallery(props) {
    return (
        <div className={`${styles.gallery} ${props.isFlexGrow  ? styles["gallery-is-flex-grow"] : ""}`}>
            {props.children}
        </div>
    );
}
