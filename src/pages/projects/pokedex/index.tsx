import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const POKEMON_COUNT = 150;
const colors: { [key: string]: string } = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const main_types = Object.keys(colors);

const Pokemon = (p: {
  id: string;
  name: string;
  type: string;
  color: string;
}) => {
  return (
    <div className={styles.pokemon} style={{ backgroundColor: p.color }}>
      <div className={styles.img_container}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
          alt={p.name}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.number}>#{p.id.padStart(3, '0')}</span>
        <h3 className={styles.name}>{p.name}</h3>
        <small className={styles.type}>
          Type: <span>{p.type}</span>{' '}
        </small>
      </div>
    </div>
  );
};

export default () => {
  const [pokemons, setPokemons] = useState<
    {
      id: string;
      name: string;
      type: string;
      color: string;
    }[]
  >([]);

  const getAllPokemons = async () => {
    for (let i = 1; i <= POKEMON_COUNT; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data: {
        id: number;
        name: string;
        types: { type: { name: string } }[];
      } = await res.json();

      const poke_types = data.types.map((type) => type.type.name);
      const type = main_types.find((type) => poke_types.indexOf(type) > -1);
      const color = type ? colors[type] : '';
      setPokemons((prev) => [
        ...prev,
        {
          id: data.id.toString(),
          name: data.name[0].toUpperCase() + data.name.slice(1),
          type: type ? type : '',
          color,
        },
      ]);
    }
  };

  useEffect(() => {
    getAllPokemons();
    return () => {};
  }, []);

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Pokedex</h1>
      <div className={styles.poke_container}>
        {pokemons.map((p) => {
          return (
            <Pokemon
              key={p.id}
              id={p.id}
              name={p.name}
              color={p.color}
              type={p.type}
            ></Pokemon>
          );
        })}
      </div>
    </div>
  );
};
