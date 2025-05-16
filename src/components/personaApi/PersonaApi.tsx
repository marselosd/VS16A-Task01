'use client';
import useFetch from "@/app/hooks/getApi";
import styles from "./personaApi.module.scss";

const API_URL = `https://persona-compendium.onrender.com/personas/`;
// https://github.com/luyluish/persona-compendium
// Agradecimento especial ao repositorio acima

export interface PersonaData {
    name: string;
    arcana: string;
    level: number;
    image: string;
    description: string;
    strength: number,
    magic: number,
    endurance: number,
    agility: number,
    luck: number,
    weak: string[],
    resists: string[],
    reflects: string[],
    absorbs: string[],
    nullifies: string[]
}

const PersonaApi = () => {
  const { data, isLoading, error } = useFetch<PersonaData>(API_URL);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  if (data != null) {
    return (
        <>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <div className={styles.personaApi}>
            <h1>{data.name}</h1>
            <h2>{data.arcana}</h2>
            <img src={data.image} alt="Imagem do Persona"/>
            <p>{data.description}</p>
            <hr/>
            <h3>Status:</h3>
            <ul>
                <li>{data.strength}</li>
                <li>{data.magic}</li>
                <li>{data.endurance}</li>
                <li>{data.agility}</li>
                <li>{data.luck}</li>
            </ul>
            <hr/>
            <h3>Fraquezas:</h3>
            <ul>
                {data.weak?.map(weakness => (
                    <li key={weakness}></li>
                ))}
            </ul>
            <hr/>
            <h3>Resistencias:</h3>
            <ul>
                {data.resists?.map(resistTo => (
                    <li key={resistTo}></li>
                ))}
                {data.reflects?.map(reflectsFrom => (
                    <li key={reflectsFrom}></li>
                ))}
                {data.absorbs?.map(absorbsFrom => (
                    <li key={absorbsFrom}></li>
                ))}
                {data.nullifies?.map(nullifiesFrom => (
                    <li key={nullifiesFrom}></li>
                ))}
            </ul>
        </div>
        </>
    );
  }
};

export default PersonaApi;