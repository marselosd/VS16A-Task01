import React from "react";
import Image from 'next/image';
import styles from './party.module.scss';

export default function Party() {
  return (
    <>

    <div className={styles.party}>
        <h1>Membro do Esquadrão</h1>
        <h2>Joker (Ren Amamiya)</h2>
        <Image
        src="/img/personagens/joker.png"
        alt="Joker"
        width={200}
        height={200}
        />
        <p>
            O protagonista e líder dos Phantom Thieves. Joker possuí a Wild Card, possibilitando trocar para quaisquer Personas que tiver.
            Isso significa que, tirando os Personas dos personagens do esquadrão e de vilões, ele pode possuir qualquer um.
            A sessão a seguir não é negada por este fato, pois ele possuí de fato três Personas mais exclusivos que o representam.
        </p>
        <hr/>
        <h3>Personas</h3>
        <ul>
            <li>Arsène</li>
            <li>Raoul</li>
            <li>Satanael</li>
        </ul>
        <hr/>
        <h3>Curiosidade</h3>
        <ul>
            <li>Arsène e Raoul vem dos nomes de Arsène "Raoul" Lupin, combinando com a ideia dos Ladrões de Corações</li>
            <li>Na mesma temática, durante o jogo você vive no sotão do Leblanc Café, homenageando Maurice Leblanc, criador de Lupin</li>
        </ul>
    </div>

    <div className={styles.party}>
        <h1>Membro do Esquadrão</h1>
        <h2>Morgana</h2>
        <Image
        src="/img/personagens/morgana.png"
        alt="Morgana"
        width={200}
        height={200}
        />
        <p>O guia fiel e mascote dos Phantom Thieves. Um misterioso "gato" com habilidades únicas. Ele possui a Arcana Magician</p>
        <hr/>
        <h3>Personas</h3>
        <ul>
            <li>Zorro</li>
            <li>Mercurius</li>
            <li>Diego</li>
        </ul>
        <hr/>
        <h3>Curiosidade</h3>
        <ul>
            <li>Ele tem um crush em uma das personagens principáis do jogo, Ann Takamaki</li>
            <li>Ao sair do metaverso, ele de fato vira um gato preto/cinzento com tonalidades de branco em suas extremidades</li>
        </ul>
    </div>


    <div className={styles.party}>
        <h1>Membro do Esquadrão</h1>
        <div>
            <h2>Mais em breve... </h2>
        </div>
    </div>

    </>
  );
}