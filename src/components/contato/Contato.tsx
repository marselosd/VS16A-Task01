import React from "react";
import styles from "./contato.module.scss";

export default function Contato() {
  return (
    <>
    <form className={styles.contactForm}>
        <h1 className={`font-persona`}>CONTATO</h1>
        <hr/>
        <br/>
        <label>
            Nome:
            <input type="text" name="name"/>
        </label>

        <label>
            Email:
            <input type="email" name="email"/>
        </label>

        <label>
            Mensagem:
            <textarea name="message"/>
        </label>

        <button type="submit">
            Enviar
        </button>
    </form>
    </>
  );
}
