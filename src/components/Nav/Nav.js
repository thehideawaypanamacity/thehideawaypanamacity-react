import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css';
import Backdrop from '../Backdrop/Backdrop';
import NavMenue from '../NavMenu/NavMenu';
import Burger from '../Burger/Burger';
import { useMediaQuery } from 'react-responsive'


export default function Nav(props) {
  // eslint-disable-next-line no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 769px)' })

  function listenScrollEvent() {
    return window.scrollY > 10
      ? setIsScrolled(true)
      : setIsScrolled(false);
  }

  function handleBackdropClick() {
    setIsNavMenuOpened(!isNavMenuOpened);
    setIsBurgerClicked(!isBurgerClicked);
  }

  function handleBurgerClick() {
    setIsNavMenuOpened(!isNavMenuOpened);
    setIsBurgerClicked(!isBurgerClicked);
  }

  const stylesOnScroll = isScrolled ? `${styles["full-opacity"]} elevation-8"` : '';

  useEffect(() => window.addEventListener("scroll", listenScrollEvent));

  return (
    <div>
      <nav className={`${styles.nav} ${stylesOnScroll}`}>
        <h1 id="logo">
          <Link href="/home">The Hideaway Panamacity</Link>
        </h1>
        <Burger onClick={handleBurgerClick} isClicked={isBurgerClicked}></Burger>
        <NavMenue isShown={isNavMenuOpened} isVertical={isTabletOrMobile}></NavMenue>
      </nav>
        <Backdrop zIndex={2} className={isNavMenuOpened && isTabletOrMobile ? styles["backdrop-fade-in"] : styles["backdrop-fade-out"]} onClick={handleBackdropClick}></Backdrop>
    </div>
  );
}
