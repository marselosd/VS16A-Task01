import React from "react";
import Image from 'next/image';
import styles from "./header.module.scss";
import NavBar from "../navbar/NavBar";
import Link from "next/link";

export default function Header() {
  return (
    <>
    <header className={styles.header}>

      <h1>Task01 - Persona 5</h1>

      <Image
        src="/img/outros/persona5-logo.png"
        alt="Logo do Jogo"
        width={100}
        height={75}
        className={styles.logo}
      />

      <Link href="https://store.steampowered.com/app/1687950/Persona_5_Royal/" target="_blank" className={styles.cta}>
        <Image
        src="/img/outros/steam-logo.png"
        alt="Logo da Steam"
        width={50}
        height={50}/>
      </Link>

    </header>
    <NavBar/>
    </>
  );
}
