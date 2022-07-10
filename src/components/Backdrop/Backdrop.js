import React from 'react';
import styles from './Backdrop.module.css';

export default function Backdrop(props) {
    const backdropStyles = props.zIndex ? { zIndex: props.zIndex } : { zIndex: 2 };
    
    function handleClick(event) {
        event.preventDefault();
        props.onClick();
    }

    function getPropsClassNames(props) {
        return props
            .className
            .split()
            .map(x => x.trim())
            .join(" ");
    }
    
    return (
        <div className={`${styles.backdrop } ${getPropsClassNames(props)}`}
            style={backdropStyles} 
            onClick={handleClick}>
        </div>
    );
}