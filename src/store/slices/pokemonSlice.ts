import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Pokemon} from '../../types/Pokemon';
import {RootState} from '../store';

interface PokemonsState {
  pokemons: Pokemon[];
  currentPokemon: Pokemon | undefined;
}

const initialState: PokemonsState = {
  pokemons: [],
  currentPokemon: undefined,
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemonsToList: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = state.pokemons.concat(action.payload);
    },
    setCurrentPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.currentPokemon = action.payload;
    },
  },
});

export const {addPokemonsToList, setCurrentPokemon} = pokemonsSlice.actions;

export const pokemonsSelector = (state: RootState) => state.pokemons.pokemons;

export default pokemonsSlice.reducer;
