import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function PokemonPage({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo templateTitle='Pokemon' />

      <main>
        <section className=''>
          <div className='min-h-screen py-20 layout'>
            <h1>Pokemons using Get Static Props</h1>
            <p>Should show &apos;bambang&apos; (msw only works in local dev)</p>

            {pokemonData && <pre>{JSON.stringify(pokemonData, null, 2)}</pre>}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const pokemonData = await axios.get<PokemonList>(
    'https://pokeapi.co/api/v2/pokemon?limit=2'
  );

  return {
    props: { pokemonData: pokemonData.data },
  };
};

export type Pokemon = {
  name: string;
  url: string;
};
export interface PokemonList {
  results: Array<Pokemon>;
}
