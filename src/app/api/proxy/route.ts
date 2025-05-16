import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: { name: string } }) {
  const { name } = params;

  try {
    const res = await fetch(`https://persona-compendium.onrender.com/personas/${name}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Persona não encontrada.' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erro no proxy.' }, { status: 500 });
  }
}
