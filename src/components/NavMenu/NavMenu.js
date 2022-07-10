import React from 'react';
import Link from 'next/link'
import styles from './NavMenu.module.css';
import Image from 'next/image'

export default function NavMenue(props) {
    function socialIcons() {
        return (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.airbnb.com/users/140494398/listings">
                    <img className={styles["social-icon"]}
                        src="/assets/icons/airbnb.svg"
                        alt="linkedin icon"/>
                </a>
            </li>
        );
    }

    function getManuClass(isVertical) {
        return ((isVertical ? styles["nav-menu-vertical"] : styles["nav-menu-horizontal"]))
    }

    function getShowClass(isVertical, isShown) {
        if(isVertical && isShown ){
            return styles["vertical-show"];
        } else if(!isVertical && isShown ) {
            return styles["horizontal-show"];
        } else if(!isShown && !isVertical) {
            return styles["horizontal-show"];
        } else {
            return "";
        };
    }

    return (
            <ul id={styles["nav-menu"]} className={`${getManuClass(props.isVertical)} ${getShowClass(props.isVertical, props.isShown)}`}>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {props.isVertical ? socialIcons() : null}
            </ul>
    );
}