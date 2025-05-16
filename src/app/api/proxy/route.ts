import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: { name: string } }) {
  const { name } = params;

  try {
      const res = await fetch(`https://persona-compendium.onrender.com/personas/${name}`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error("Erro na API");
      }

      const data = await res.json();
      return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({err});
    }
}
