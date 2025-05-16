import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const segments = url.pathname.split('/'); // ['', 'api', 'personas', 'arsene']

  const name = segments[3]; // índice 3

  if (!name) {
    return NextResponse.json({ error: 'Parâmetro "name" ausente' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://persona-compendium.onrender.com/personas/${name}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Persona não encontrada" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido no proxy" },
      { status: 500 }
    );
  }
}
