import {useState} from 'react';
import {Pokemon} from '../types/Pokemon';
import {getPokemonByName} from '../services/pokemonService';
import {pokemonMapper} from '../utils/mapper';

const useSearchPokemon = () => {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchPokemon = async (search: string) => {
    if (!search) {
      return;
    }
    setIsLoading(true);

    try {
      const pokemonResponse = await getPokemonByName(search);

      if (!pokemonResponse) {
        return;
      }

      const pokemon = pokemonMapper(pokemonResponse);

      setCurrentPokemon(pokemon);
    } catch (error) {
      setIsError(true);
      setCurrentPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {searchPokemon, currentPokemon, isLoading, isError};
};

export {useSearchPokemon};
