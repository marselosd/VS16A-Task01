import React from "react";
import styles from "./buttonCallApi.module.scss";

interface ButtonCallApiProps {
  onClick: () => void;
}

export default function ButtonCallApi({ onClick }: ButtonCallApiProps) {
  return (
    <div className={styles.buttonCallApi}>
      <h1>Bem-vindo à Velvet Room.</h1>
      <h2>Aperte o botão para pesquisar um Persona no Compendium</h2>
      <p>
        A resposta da API pode variar de acordo com o Render.
        <br />
        Agradecimento especial ao user <strong>luyluish</strong> no GitHub.
      </p>
      <button onClick={onClick}>Pesquisar</button>
    </div>
  );
}