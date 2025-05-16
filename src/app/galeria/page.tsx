import Galeria from "@/components/galeria/Galeria";
import React from "react";

const imagensTokyo = [
  { titulo: "Akihabara", src: "/img/galeria/akihabara.png", alt: "Akihabara" },
  { titulo: "Aoyama", src: "/img/galeria/aoyama.jpg", alt: "Aoyama" },
  { titulo: "Ichigaya", src: "/img/galeria/pichigaya.jpg", alt: "Ichigaya" },
  { titulo: "Kichijoji", src: "/img/galeria/pkichijoji.jpg", alt: "Kichijoji" },
  { titulo: "Shibuya", src: "/img/galeria/pshibuya.jpg", alt: "Shibuya" },
  { titulo: "Shibuya Station", src: "/img/galeria/pshibuyastation.jpg", alt: "Shibuya Station" },
  { titulo: "Shinjuku", src: "/img/galeria/pshinjuku.jpg", alt: "Shinjuku" },
  { titulo: "Yongenjaya", src: "/img/galeria/yongenjaya.jpg", alt: "Yongenjaya" }
];

export default function MenuGaleria() {
  return (
    <>
    <Galeria imagens={imagensTokyo}/>
    </>
  );
}
