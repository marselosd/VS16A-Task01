export interface ImageGaleria {
    titulo: string;
    src: string;
    alt: string;
}

export default function useGaleria(imagens: ImageGaleria[]) {
  return {
    imagens,
    total: imagens.length
  };
}