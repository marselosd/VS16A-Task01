import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://persona-compendium.onrender.com/personas", {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Não foi possível obter lista de personas" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
