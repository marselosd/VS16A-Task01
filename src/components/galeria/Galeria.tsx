'use client';
import React from "react";
import styles from "./galeria.module.scss";
import Image from 'next/image';
import useResize from "@/app/hooks/useResize";

export default function Galeria() {
    const {width, height} = useResize();

  return (
    <>
    <div className={styles.galeriaDiv}>
        <h1 className={`font-persona`}>GALERIA</h1>

        <div className={styles.wrapperintern}>
            <div className={styles.intern}>
                <h2>Akihabara</h2>
                <Image
                src="/img/galeria/akihabara.png"
                alt="Akihabara"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Aoyama</h2>
                <Image
                src="/img/galeria/aoyama.jpg"
                alt="Aoyama"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Ichigaya</h2>
                <Image
                src="/img/galeria/pichigaya.jpg"
                alt="Ichigaya"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Kichijoji</h2>
                <Image
                src="/img/galeria/pkichijoji.jpg"
                alt="Kichijoji"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Shibuya</h2>
                <Image
                src="/img/galeria/pshibuya.jpg"
                alt="Shibuya"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Shibuya Station</h2>
                <Image
                src="/img/galeria/pshibuyastation.jpg"
                alt="Shibuya Station"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Shinjuku</h2>
                <Image
                src="/img/galeria/pshinjuku.jpg"
                alt="Shinjuku"
                width={width}
                height={height}
                />
            </div>

            <div className={styles.intern}>
                <h2>Yongenjaya</h2>
                <Image
                src="/img/galeria/yongenjaya.jpg"
                alt="Yongenjaya"
                width={width}
                height={height}
                />
            </div>
        </div>

    </div>
    </>
  );
}