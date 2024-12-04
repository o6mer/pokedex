import {Pokemon} from '../types/Pokemon';
import {PokemonResponse} from '../types/PokemonResponse';

const pokemonMapper = (pokemonResponse: PokemonResponse): Pokemon => {
  const mappedPokemon: Pokemon = {
    id: pokemonResponse.id,
    name: pokemonResponse.name,
    nickname: pokemonResponse.name,
    abilities: pokemonResponse.abilities.map(ability => ability.ability.name),
    image: pokemonResponse.sprites.front_default,
    types: pokemonResponse.types.map(type => type.type.name),
  };

  return mappedPokemon;
};

export {pokemonMapper};
