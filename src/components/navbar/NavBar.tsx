import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
    <nav className={styles.navbar}>
        <Link href='/home' className={styles.navLinks}>Home</Link>
        <Link href='/menu1' className={styles.navLinks}>Menu - Party</Link>
        <Link href='/menu2' className={styles.navLinks}>Menu - OST</Link>
    </nav>
    </>
  );
}
