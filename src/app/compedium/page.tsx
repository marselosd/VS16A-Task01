'use client';
import React, { useState } from "react";
import PersonaApi from "@/components/personaApi/PersonaApi";
import ButtonCallApi from "@/components/buttonCallApi/ButtonCallApi";

export default function Compedium() {
  const [personaName, setPersonaName] = useState<string | null>(null);

  const fetchRandomPersona = async () => {
    try {
      const res = await fetch('/api/personas', { cache: 'no-store' });
      if (!res.ok) throw new Error('Erro ao obter lista de personas');
      const personas: { query: string }[] = await res.json();
      const randomIndex = Math.floor(Math.random() * personas.length);
      setPersonaName(personas[randomIndex].query);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = () => {
    fetchRandomPersona();
  };

  return (
    <>
      <ButtonCallApi onClick={handleClick} />
      {personaName && <PersonaApi name={personaName} />}
    </>
  );
}
