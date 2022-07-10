import React from 'react';
import Link from 'next/link'
import styles from './NavMenu.module.css';

export default function NavMenue(props) {
    function socialIcons() {
        return (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.airbnb.com/users/140494398/listings">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles["social-icon"]}
                        src="/assets/icons/airbnb.svg"
                        alt="linkedin icon"/>
                </a>
            </li>
        );
    }

    return (
            <ul id={styles["nav-menu"]} className={`${props.isMobileShown ? styles["vertical-show"] : ""}`}>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {props.isMobileShown ? socialIcons() : null}
            </ul>
    );
}