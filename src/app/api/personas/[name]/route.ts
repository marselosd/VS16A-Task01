import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const name = pathname.split("/").pop();

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
