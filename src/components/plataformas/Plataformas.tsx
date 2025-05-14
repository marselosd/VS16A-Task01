import React from "react";
import Image from 'next/image';
import styles from './plataformas.module.scss';

export default function Plataformas() {
  return (
    <>
    <div className={styles.plataformas}>
        <h1>Plataformas</h1>
        <p>
        Persona 5 foi lançado originalmente para <strong>PlayStation 3</strong> e <strong>PlayStation 4</strong> em 2016, sendo um exclusivo dos consoles da Sony na época. 
        O jogo chamou atenção por sua estética marcante, narrativa envolvente e jogabilidade estratégica baseada em turnos.
        </p>

        <hr />

        <p>
        Persona 5 Royal, a versão expandida e definitiva do jogo, foi lançada inicialmente para <strong>PlayStation 4</strong> em 2019 no Japão e em 2020 mundialmente. 
        A partir de 2022, o jogo se tornou multiplataforma, disponível para:
        </p>

        <ul>
          <li>PlayStation 4</li>
          <li>PlayStation 5</li>
          <li>Xbox One</li>
          <li>Xbox Series X|S</li>
          <li>Nintendo Switch</li>
          <li>PC (Windows - Steam e Microsoft Store)</li>
        </ul>

        <p>
        Essa expansão trouxe gráficos aprimorados, novos personagens, arcos narrativos inéditos e melhorias de jogabilidade, 
        tornando-se a experiência definitiva para novos jogadores e fãs da série.
        </p>
        <Image
        src="/img/outros/persona5-2.jpg"
        alt="Imagem 2 de Persona 5"
        width={300}
        height={200}
        />
    </div>
    </>
  );
}