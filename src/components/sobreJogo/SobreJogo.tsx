import React from "react";
import Image from 'next/image';
import styles from './sobreJogo.module.scss';

export default function SobreOJogo() {
  return (
    <>
    <div className={styles.sobre}>
        <h1>Sobre o Jogo</h1>
        <p>
        Persona 5 é um RPG japonês aclamado pela crítica, desenvolvido pela Atlus. 
        Lançado originalmente em 2016, o jogo acompanha um grupo de estudantes do ensino médio 
        que despertam habilidades sobrenaturais e formam os Phantom Thieves of Hearts — 
        um grupo secreto que busca mudar o coração de adultos corruptos no mundo real. 
        Com uma estética única inspirada em anime, trilha sonora marcante e um sistema de combate por turnos refinado, 
        Persona 5 combina exploração, simulação social e drama psicológico em uma narrativa envolvente e estilizada. 
        Sua versão expandida, Persona 5 Royal, adiciona novos personagens, arcos de história, mecânicas de gameplay e conteúdos inéditos.
        </p>
        <Image
        src="/img/outros/persona5-1.jpg"
        alt="Imagem 1 de Persona 5"
        width={300}
        height={200}
        />
    </div>
    </>
  );
}