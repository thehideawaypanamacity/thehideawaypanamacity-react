import React from 'react';
import styles from './Backdrop.module.css';

export default function Backdrop(props) {
    const backdropStyles = props.zIndex ? { zIndex: props.zIndex } : { zIndex: 2 };
    
    function handleClick(event) {
        event.preventDefault();
        props.onClick();
    }

    return (
        <div className={`${styles.backdrop} ${props.isShown ? styles["backdrop-in"] : styles["backdrop-out"]}`}
            style={backdropStyles} 
            onClick={handleClick}>
        </div>
    );
}