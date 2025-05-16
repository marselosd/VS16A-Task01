import React from "react";
import styles from "./navbar.module.scss";
import LinkPropCtx from "../linkPropCtx/LinkPropCtx";

export default function NavBar() {
  return (
    <>
    <nav className={styles.navbar}>
        <LinkPropCtx href="/home" content="Home" className={styles.navLinks}/>
        <LinkPropCtx href="/menu1" content="Party" className={styles.navLinks}/>
        <LinkPropCtx href="/menu2" content="OST" className={styles.navLinks}/>
        <LinkPropCtx href="/galeria" content="Galeria" className={styles.navLinks}/>
        <LinkPropCtx href="/contato" content="Contato" className={styles.navLinks}/>
        <LinkPropCtx href="/compedium" content="Compedium" className={styles.navLinks}/>
    </nav>
    </>
  );
}
