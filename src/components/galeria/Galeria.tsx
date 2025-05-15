import React from "react";
import styles from "./galeria.module.scss";
import Image from 'next/image';

export default function Galeria() {
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
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Aoyama</h2>
                <Image
                src="/img/galeria/aoyama.jpg"
                alt="Aoyama"
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Ichigaya</h2>
                <Image
                src="/img/galeria/pichigaya.jpg"
                alt="Ichigaya"
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Kichijoji</h2>
                <Image
                src="/img/galeria/pkichijoji.jpg"
                alt="Kichijoji"
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Shibuya</h2>
                <Image
                src="/img/galeria/pshibuya.jpg"
                alt="Shibuya"
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Shibuya Station</h2>
                <Image
                src="/img/galeria/pshibuyastation.jpg"
                alt="Shibuya Station"
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Shinjuku</h2>
                <Image
                src="/img/galeria/pshinjuku.jpg"
                alt="Shinjuku"
                width={400}
                height={300}
                />
            </div>

            <div className={styles.intern}>
                <h2>Yongenjaya</h2>
                <Image
                src="/img/galeria/yongenjaya.jpg"
                alt="Yongenjaya"
                width={400}
                height={300}
                />
            </div>
        </div>

    </div>
    </>
  );
}