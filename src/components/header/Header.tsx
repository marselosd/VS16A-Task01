import React from "react";
import Image from 'next/image';
import styles from "./header.module.scss";
import NavBar from "../navbar/NavBar";
import Link from "next/link";
import GoogleLogin from "react-google-login";
{/*
import responseGoogle from "@/app/hooks/useResponseGoogle";
import GoogleProp from "@/app/hooks/useResponseGoogle";
*/}

export default function Header() {
  return (
    <>
    <header className={`${styles.header} font-persona`}>

      <h1>TASK01-PERSONA5</h1>

      <Image
        src="/img/outros/P5R-logo.webp"
        alt="Logo do Jogo"
        width={100}
        height={100}
        className={styles.logo}
      />

      <Link href="https://store.steampowered.com/app/1687950/Persona_5_Royal/" target="_blank" className={styles.cta}>
        <Image
        src="/img/outros/steam-logo.png"
        alt="Logo da Steam"
        width={50}
        height={50}/>
      </Link>
      {/*
      <GoogleLogin 
      clientId={"918306502976-pp4emgrb1is59mvlhl9ml77trs46j5j1.apps.googleusercontent.com"}
      buttonText="Continuar com Google"
      onSuccess={responseGoogle}
      />

      {/*eslint-disable-next-line @next/next/no-img-element*/}
      {/*<img src={profilePic} alt="Profile"/>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      */}
    </header>
    <NavBar/>
    </>
  );
}
