import React from 'react';
import styles from './Burger.module.css';

export default function Burger(props) {
    function handleClick(event) {
        event.preventDefault();
        props.onClick();
    }

    return (
        <div
            id={styles.burger}
            aria-label="Toggle menu"
            onClick={handleClick}
            className={props.isClicked ? styles["burger-is-clicked"] : ""}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
