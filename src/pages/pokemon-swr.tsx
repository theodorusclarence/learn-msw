import * as React from 'react';
import useSWR from 'swr';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function PokemonPage() {
  const { data: pokemonData } = useSWR<PokemonList>(
    'https://pokeapi.co/api/v2/pokemon?limit=2'
  );

  return (
    <Layout>
      <Seo templateTitle='Pokemon' />

      <main>
        <section className=''>
          <div className='min-h-screen py-20 layout'>
            <h1>Pokemons</h1>

            {pokemonData && <pre>{JSON.stringify(pokemonData, null, 2)}</pre>}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export type Pokemon = {
  name: string;
  url: string;
};
export interface PokemonList {
  results: Array<Pokemon>;
}
