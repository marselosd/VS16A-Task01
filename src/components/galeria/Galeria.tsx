'use client';
import React from "react";
import styles from "./galeria.module.scss";
import Image from 'next/image';
import useResize from "@/app/hooks/useResize";
import useGaleria, { ImageGaleria } from "@/app/hooks/useGaleria";

export default function Galeria({imagens} : {imagens: ImageGaleria[]}) {
    const {width, height} = useResize();
    const {imagens: lista} = useGaleria(imagens);

  return (
    <>
    <div className={styles.galeriaDiv}>
        <h1 className={`font-persona`}>GALERIA</h1>

        <div className={styles.wrapperintern}>
        {lista.map((img, index) => (
          <div key={index} className={styles.intern}>
            <h2>{img.titulo}</h2>
            <Image
              src={img.src}
              alt={img.alt}
              width={width}
              height={height}
            />
          </div>
        ))}
        </div>
    </div>
    </>
  );
  
}
