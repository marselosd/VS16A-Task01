import React from "react";
import styles from './ost.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function Ost() {
  return (
    <>
    <div className={styles.ost}>
        <h1>OST (Trilha Sonora)</h1>

        <Image
          src="/img/outros/p5ost.png"
          alt="Imagem 2 de Persona 5"
          width={200}
          height={200}
        />

        <p>
        Uma das partes mais marcantes e iconicas de qualquer Persona é a sua Trilha Sonora, e no Persona 5 isto não seria diferente.
        <br/>
        A Trilha Sonora possui como tema o Acid Jazz com uma mistura de Funk, sendo apreciada por fãs e não fãs do jogo.
        </p>

        <hr/>

        <h2>Músicas populares:</h2>
        <ul>
            <li>Life Will Change – Música agitada para o caminho contra os bosses do jogo.</li>
            <li>Beneath the Mask – A música relaxante do jogo, toca dentro da cafeteria/casa</li>
            <li>Last Surprise – Tema principal de combate.</li>
            <li>The Whims of Fate – Música da dungeon do Cassino do jogo.</li>
            <li>Wake Up, Get Up, Get Out There – Música vibrante de abertura do jogo.</li>
            <li>Rivers in the Desert – Tema épico de combate final.</li>
        </ul>

        <hr/>

        <h2>Links</h2>
        <Link href="https://open.spotify.com/intl-pt/track/0LNyWv4RYKbaXIvzk6nMxZ?si=50d5246c1b25408b" target="_blank" className={styles.cta}>Life Will Change</Link>
        <Link href="https://open.spotify.com/intl-pt/track/5XLXrm5JVMdOus1fWmTOFw?si=1591b989aad34dc9" target="_blank" className={styles.cta}>Beneath the Mask</Link>
        <Link href="https://open.spotify.com/intl-pt/track/4cPnNnTMkJ6soUOUzEtmcp?si=b68c3964a6e443c6" target="_blank" className={styles.cta}>Last Surprise</Link>
        <Link href="https://open.spotify.com/intl-pt/track/73DCreJgfFdFxVnjsMSeo4?si=aa08fe0313314009" target="_blank" className={styles.cta}>The Whims of Fate</Link>
        <Link href="https://open.spotify.com/intl-pt/track/4AuZBIN4aeFL9egQldQfRn?si=6e26153c2302408d" target="_blank" className={styles.cta}>Wake Up, Get Up, Get Out There</Link>
        <Link href="https://open.spotify.com/intl-pt/track/6rgIKCKKCnhyaNTgmY73tq?si=1e253ccf3c7b4661" target="_blank" className={styles.cta}>Rivers in the Desert</Link>
    </div>
    </>
  );
}