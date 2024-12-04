import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemonPaginated, getPokemonByUrl} from '../services/pokemonService';
import {addPokemonsToList} from '../store/slices/pokemonSlice';
import {RootState} from '../store/store';
import {pokemonMapper} from '../utils/mapper';

const pageSize = 20;
const pageLimit = 10;

const useFetchPokemonPaginated = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const [currentOffset, setCurrentOffset] = useState(
    Math.floor(pokemons.length / pageSize),
  );

  useEffect(() => {
    const fetchPokemonList = async (offset: number) => {
      try {
        if (currentOffset >= pageLimit) return;

        const data = await getPokemonPaginated(pageSize, offset * pageSize);

        const pokemonDetails = await Promise.all(
          data.results.map(async pokemon => {
            const details = await getPokemonByUrl(pokemon.url);

            return pokemonMapper(details);
          }),
        );

        dispatch(addPokemonsToList(pokemonDetails));
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemonList(currentOffset);
  }, [currentOffset, dispatch]);

  const fetchNextPage = () => setCurrentOffset(prev => prev + 1);

  return {pokemons, fetchNextPage};
};

export default useFetchPokemonPaginated;
